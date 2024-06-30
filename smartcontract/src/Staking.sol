// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "@openzeppelin/access/Ownable.sol";
import {IERC20} from "@openzeppelin/token/ERC20/IERC20.sol";
import {Test, console} from "forge-std/Test.sol";

/**
 * @title StakingContract
 * @dev A contract for staking tokens and earning rewards based on staking duration and annual yield rates.
 */
contract Staking is Ownable {
    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                          ERRORS                           */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
    error Staking_FailedTransaction();

    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                          STORAGE                           */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
    IERC20 public token;
    uint32 constant SECONDS_IN_A_DAY = 86400;
    uint16 constant DAYS_IN_A_YEAR = 365;

    uint128 public annualYieldRate;
    uint256 public totalStakedToken;

    address private tokenowner;

    struct Stake {
        uint256 amount;
        uint32 startTimestamp;
        uint256 period;
        uint256 annualYieldRate;
        bool withdrawn;
        uint256 lastClaimTimestamp;
        uint256 lastRewardTimestamp;
        uint256 accumulatedRewards;
        uint256 currentRewards;
    }

    mapping(address => Stake[]) public stakes;
    mapping(uint256 => uint256) public stakingLimits;
    mapping(uint256 => uint256) public earlyWithdrawalPenalties;

    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                          EVENTS                           */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
    event TokensStaked(
        address indexed user,
        uint256 amount,
        uint256 period,
        uint256 annualYieldRate
    );
    event RewardsClaimed(address indexed user, uint256 amount);
    event StakeWithdrawn(address indexed user, uint256 amount);
    event EarlyWithdrawal(
        address indexed user,
        uint256 amount,
        uint256 penalty
    );
    event TokensBurned(address indexed user, uint256 amount);

    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                        CONSTRUCTOR                         */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
    /**
     * @dev Constructor sets the token address and initializes staking limits and penalties.
     * @param _token Address of the ERC20 token used for staking.
     * @param _annualYieldRate Annual yield rate in percentage.
     * @param _tokenowner Token owner.

     */
    constructor(
        IERC20 _token,
        uint128 _annualYieldRate,
        address _tokenowner
    ) Ownable() {
        token = _token;
        annualYieldRate = _annualYieldRate;
        tokenowner = _tokenowner;

        stakingLimits[30] = (type(uint256).max / 10 ** 18) * 10 ** 18;
        stakingLimits[60] = (type(uint256).max / 10 ** 18) * 10 ** 18;
        stakingLimits[90] = 10000 * 10 ** 18;
        stakingLimits[180] = 5000 * 10 ** 18;
        stakingLimits[360] = 5000 * 10 ** 18;
        stakingLimits[720] = 2000 * 10 ** 18;

        earlyWithdrawalPenalties[90] = 10; // 10%
        earlyWithdrawalPenalties[180] = 20; // 20%
        earlyWithdrawalPenalties[360] = 30; // 30%
        earlyWithdrawalPenalties[720] = 50; // 50%
    }

    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*              PUBLIC / EXTERNAL VIEW FUNCTIONS              */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
    /**
     * @dev Stakes tokens for a specified period.
     * @param _amount Amount of tokens to stake.
     * @param _period Staking period in days.
     */
    function stakeTokens(uint256 _amount, uint256 _period) external {
        require(_amount > 0, "Amount must be greater than 0");
        require(
            _period == 30 ||
                _period == 60 ||
                _period == 90 ||
                _period == 180 ||
                _period == 360 ||
                _period == 720,
            "Invalid staking period"
        );

        require(
            _amount <= stakingLimits[_period],
            "Exceeds staking limit for the period"
        );
        bool success = token.transferFrom(msg.sender, address(this), _amount);
        require(success, "Staking failed");

        totalStakedToken += _amount;

        stakes[msg.sender].push(
            Stake({
                amount: _amount,
                startTimestamp: uint32(block.timestamp),
                period: _period,
                annualYieldRate: annualYieldRate,
                withdrawn: false,
                lastClaimTimestamp: block.timestamp,
                lastRewardTimestamp: block.timestamp,
                accumulatedRewards: 0,
                currentRewards: 0
            })
        );

        emit TokensStaked(msg.sender, _amount, _period, annualYieldRate);
    }

    /**
     * @dev Claims rewards for a specific stake after 30 days from the last claim.
     * Rewards can only be claimed once every 30 days and can be withdrawn after 7 days.
     * @param stakeIndex Index of the stake in the stakes array.
     */
    function claimRewards(uint256 stakeIndex) external {
        require(stakeIndex < stakes[msg.sender].length, "Invalid stake index");
        Stake storage stake = stakes[msg.sender][stakeIndex];
        require(!stake.withdrawn, "Stake already withdrawn");

        // Make sure the expected Reward is less or equal to the accumlatedRewards
        uint256 expectedTotalRewards = calculateEarnings(
            stake.amount,
            stake.period
        );
        require(
            stake.accumulatedRewards <= expectedTotalRewards,
            "Exceed expected reward"
        );

        // Calculate time intervals
        uint256 currentTime = block.timestamp;
        uint256 claimInterval = 30 days; // 30 days interval
        uint256 eligibleClaimTime = stake.lastClaimTimestamp + claimInterval;
        require(currentTime >= eligibleClaimTime, "Rewards not yet claimable");

        // Calculate earnings since last claim
        uint256 timeSinceLastClaim = (currentTime - stake.lastClaimTimestamp) /
            1 days;
        uint256 earnings = calculateEarnings(stake.amount, timeSinceLastClaim);

        // Update accumulated rewards and last claim timestamp
        stake.accumulatedRewards += earnings;
        stake.currentRewards += earnings;
        stake.lastClaimTimestamp = currentTime;

        emit RewardsClaimed(msg.sender, earnings);
    }

    /**
     * @dev Withdraws the initial stake and all accumulated rewards after the staking period has ended.
     * @param stakeIndex Index of the stake in the stakes array.
     */
    function withdrawStake(uint256 stakeIndex) external {
        require(stakeIndex < stakes[msg.sender].length, "Invalid stake index");
        Stake storage stake = stakes[msg.sender][stakeIndex];
        require(!stake.withdrawn, "Stake already withdrawn");

        // Make sure the expected Reward is less or equal to the accumlatedRewards
        uint256 expectedTotalRewards = calculateEarnings(
            stake.amount,
            stake.period
        );
        uint256 rewardAmount = stake.currentRewards;

        require(
            stake.accumulatedRewards <= expectedTotalRewards,
            "Exceed expected reward"
        );

        require(rewardAmount != 0, "Rewards not available");

        // Calculate time intervals
        uint256 currentTime = block.timestamp;
        uint256 claimInterval = 30 days + 7 days; // 30 days interval
        uint256 eligibleRewardTime = stake.lastRewardTimestamp + claimInterval;
        require(currentTime > eligibleRewardTime, "Rewards not yet claimable");

        // Update accumulated rewards and last claim timestamp
        stake.lastRewardTimestamp = currentTime;

        // Transfer reward amount (accumulated rewards)
        stake.currentRewards = 0;

        if (stake.accumulatedRewards >= expectedTotalRewards) {
            stake.withdrawn = true;
        }
        bool success = token.transferFrom(tokenowner, msg.sender, rewardAmount);
        if (!success) revert Staking_FailedTransaction();

        emit RewardsClaimed(msg.sender, rewardAmount);
    }

    function withdrawLockedToken(uint256 stakeIndex) external {
        require(stakeIndex < stakes[msg.sender].length, "Invalid stake index");
        Stake storage stake = stakes[msg.sender][stakeIndex];
        require(!stake.withdrawn, "Stake already withdrawn");
        require(stake.amount > 0, "Invalid amount");

        require(
            block.timestamp >
                stake.startTimestamp +
                    7 days +
                    (stake.period * SECONDS_IN_A_DAY),
            "Staking period not completed"
        );

        uint256 lockedAmount = stake.amount;
        stake.amount = 0;

        // Transfer total amount (initial stakes)
        bool success = token.transfer(msg.sender, lockedAmount);
        if (!success) revert Staking_FailedTransaction();

        emit StakeWithdrawn(msg.sender, lockedAmount);
    }

    /**
     * @dev Allows early withdrawal of staked tokens with a penalty.
     * @param stakeIndex Index of the stake in the stakes array.
     */
    function earlyWithdrawal(uint256 stakeIndex) private {
        require(stakeIndex < stakes[msg.sender].length, "Invalid stake index");
        Stake storage stake = stakes[msg.sender][stakeIndex];
        require(!stake.withdrawn, "Already withdrawn");

        uint256 penaltyRate = earlyWithdrawalPenalties[stake.period];
        uint256 penalty = (stake.amount * penaltyRate) / 100;
        uint256 amountAfterPenalty = stake.amount - penalty;

        stake.withdrawn = true;
        token.transfer(msg.sender, amountAfterPenalty);
        token.transfer(address(0), penalty); // Burn the penalty

        emit EarlyWithdrawal(msg.sender, amountAfterPenalty, penalty);
    }

    /**
     * @dev Reduces tokens from a user's stake.
     * @param _user Address of the user whose tokens will be burned.
     * @param _amount Amount of tokens to burn.
     */
    function burnTokens(
        address _user,
        uint256 _amount,
        uint256 stakeIndex
    ) external onlyOwner {
        require(_amount > 0, "Amount must be greater than 0");
        Stake storage stake = stakes[_user][stakeIndex];
        stake.amount -= _amount;
        emit TokensBurned(_user, _amount);
    }

    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                   INTERNAL/private FUNCTIONS               */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
    /**
     * @dev Calculates earnings based on the staked amount, annual yield rate, and time elapsed.
     * @param _amount Amount of staked tokens.
     * @param _timeElapsed Time elapsed since last calculation or stake.
     * @return Earnings calculated based on the inputs.
     */
    function calculateEarnings(
        uint256 _amount,
        uint256 _timeElapsed
    ) internal view returns (uint256) {
        return
            (_amount * annualYieldRate * _timeElapsed) / (DAYS_IN_A_YEAR * 100);
    }

    /**
     * @dev Get the stake of a user.
     * @param _index Index of the stake.
     * @return It returns the stake.
     */
    function getStake(uint256 _index) public view returns (Stake memory) {
        return stakes[msg.sender][_index];
    }

    /**
     * @dev Get the stake count of a user.
     * @return Counts of the stake.
     */
    function getStakeCount() public view returns (uint256) {
        return stakes[msg.sender].length;
    }
}
