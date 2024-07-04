// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

import "@openzeppelin/token/ERC20/IERC20.sol";
import {Test, console} from "forge-std/Test.sol";
import {Staking} from "../src/Staking.sol";
import {SeeseaToken} from "../src/SeeseaToken.sol";
import {SeeseaPurchaseToken} from "../src/SeeseaPurchaseToken.sol";
import {DummyERC20} from "../test/mocks/DummyERC20.sol";

contract StakingTest is Test {
    Staking public staking;
    SeeseaToken seeseatoken;
    SeeseaPurchaseToken seeseapurchasetoken;
    DummyERC20 usdt;
    DummyERC20 usdc;

    uint256 public constant USDT_PRECISION = 1e18;

    address deployer = address(1);
    address tokenowner = address(2);
    address userOne = address(3);
    address userTwo = address(4);
    address otherowner = address(5);

    function setUp() external {
        usdt = new DummyERC20(18);
        usdc = new DummyERC20(18);

        usdt.transfer(userOne, 100 * USDT_PRECISION);
        usdt.transfer(userTwo, 100 * USDT_PRECISION);

        assert(usdt.balanceOf(userOne) == 100 * USDT_PRECISION);
        assert(usdt.balanceOf(userTwo) == 100 * USDT_PRECISION);

        seeseatoken = new SeeseaToken(tokenowner);

        vm.startPrank(tokenowner);
        seeseapurchasetoken = new SeeseaPurchaseToken(
            IERC20(seeseatoken),
            0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526,
            address(usdt),
            address(usdc)
        );

        staking = new Staking(seeseatoken, tokenowner);

        seeseatoken.transfer(address(seeseapurchasetoken), 50_000_000 ether);
        seeseatoken.transfer(address(staking), 1_000_000 ether);

        assert(
            seeseatoken.balanceOf(address(seeseapurchasetoken)) ==
                50_000_000 ether
        );
        assert(seeseatoken.balanceOf(address(staking)) == 1_000_000 ether);
        vm.stopPrank();

        vm.deal(userOne, 100 ether);
        vm.deal(userTwo, 100 ether);
    }

    modifier buyTokens(uint256 _amount) {
        vm.startPrank(userOne);
        uint256 amount = _amount * USDT_PRECISION;
        usdt.approve(address(seeseapurchasetoken), amount);
        seeseapurchasetoken.buyWithOtherTokens(address(usdt), amount);

        vm.stopPrank();

        _;
    }

    function test_stakeTokens() external buyTokens(10) {
        vm.startPrank(userOne);
        seeseatoken.approve(address(staking), 10 ether);

        staking.stakeTokens(10 ether, 30);
        assert(staking.totalStakedToken() == 10 ether);
        vm.stopPrank();
    }

    function test_claimRewards() external buyTokens(10) {
        vm.startPrank(userOne);
        uint256 beforebalance = seeseatoken.balanceOf(userOne);

        seeseatoken.approve(address(staking), 10 ether);
        staking.stakeTokens(10 ether, 60);

        vm.warp(2592001 + 1 + 2592001);
        staking.claimRewards(0);

        Staking.Stake memory stake = staking.getStake(0);
        assert(
            seeseatoken.balanceOf(userOne) ==
                beforebalance + stake.currentRewards
        );
        vm.stopPrank();
    }

    function test_burntoken() external buyTokens(10) {
        vm.startPrank(userOne);
        seeseatoken.approve(address(staking), 10 ether);

        staking.stakeTokens(10 ether, 30);
        vm.stopPrank();

        vm.startPrank(address(tokenowner));
        staking.burnTokens(userOne, 10 ether, 0);
        vm.stopPrank();
        vm.startPrank(userOne);
        Staking.Stake memory stake = staking.getStake(0);
        assert(stake.amount == 0);
        vm.stopPrank();
    }
}
