// SPDX-License-Identifier : MIT
pragma solidity ^0.8.15;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract IngToken is ERC20 {
    string public _name = 'ingToken';
    string public _symbol = 'ITK';
    uint256 public _totalSupply = 100000 * ( 10 ** decimals() );

    constructor() ERC20( _name, _symbol ) {
        _mint(msg.sender, _totalSupply);
    }
}