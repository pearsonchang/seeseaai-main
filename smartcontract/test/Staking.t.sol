// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

import {Test, console} from "forge-std/Test.sol";
import {Staking} from "../src/Staking.sol";
import {SeeseaToken} from "../src/SeeseaToken.sol";
import {DummyERC20} from "../test/mocks/DummyERC20.sol";

contract StakingTest is Test {
    Staking public staking;
    SeeseaToken seeseatoken;
    SeeseaPurchaseToken seeseapurchasetoken;
    DummyERC20 usdt;

    uint256 public constant USDT_PRECISION = 1e6;

    address deployer = address(1);
    address tokenowner = address(2);
    address userOne = address(3);
    address userTwo = address(4);

    function setUp() external {
        usdt = new DummyERC20(6);
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

        seeseatoken.transfer(address(seeseapurchasetoken), 5_000_000 ether);
        assert(
            seeseatoken.balanceOf(address(seeseapurchasetoken)) ==
                5_000_000 ether
        );
        vm.stopPrank();

        staking = new Staking(seeseatoken, 10);

        vm.deal(user, 100 ether);
        vm.deal(userTwo, 100 ether);
    }

    modifier buyTokensForTwo(uint256 _amount) {
        vm.startPrank(userOne);
        uint256 amount = _amount * USDT_PRECISION;
        usdt.approve(address(seeseapurchasetoken), amount);
        seeseapurchasetoken.buyWithOtherTokens(address(usdt), amount);
        vm.stopPrank();
    }
    modifier buyTokens(uint256 _amount) {
        vm.startPrank(userOne);
        uint256 amount = _amount * USDT_PRECISION;
        usdt.approve(address(seeseapurchasetoken), amount);
        seeseapurchasetoken.buyWithOtherTokens(address(usdt), amount);
        vm.stopPrank();

        vm.startPrank(userTwo);
        uint256 amount = _amount * USDT_PRECISION;
        usdt.approve(address(seeseapurchasetoken), amount);
        seeseapurchasetoken.buyWithOtherTokens(address(usdt), amount);
        vm.stopPrank();
    }
}
