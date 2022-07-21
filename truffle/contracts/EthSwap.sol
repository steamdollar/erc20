// SPDX-License-Identifier : MIT
pragma solidity ^0.8.15;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";


//ingToken Tx CA
// EthSwap Tx (ingToken CA)
    // CA.balanceOf()call()
    // CA,transfer()send()
contract EthSwap {
    ERC20 public token;
//   type  접근   변수명
    uint public rate;


    // ingToken에 대한 ca를 반드시 받는다
    // ERC20을 배포한 컨트랙트의 어드레스
    constructor(ERC20 _token) {
        token = _token;
    }

    function getThis() public view returns(address) {
        return address(this); // 이 ethswap의 ca
    }

    function getMsgSender() public view returns(address) {
        return msg.sender; //ethswap을 실행한 사람
    }

    function getToken() public view returns (address) {
        return address(token);
        // ingToken에 대한 ca
    } 

    function getSwapBalance() public view returns(uint) {
        return token.balanceOf(msg.sender);
    }

    function getTokenOwner() public view returns (address) {
        return token.owner();
    }

    function buyToken() public payable {
        uint256 tokenAmount = msg.value * rate;
        require(token.balanceOf(address(this)) >= tokenAmount, 'error [1]');
        token.transfer(msg.sender, tokenAmount);
    }

    function sellToken() public payable {
        
    }
}