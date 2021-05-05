pragma solidity =0.7.4;
// Escrow Contract

contract Escrow {
    mapping(address => uint) userBid;
    address public winningBid;
    address payable public owner;
    address payable[] bidders;
    uint public _balance;
    
    constructor(address payable _owner) public {
        owner = _owner;
    }
    
    function record(address payable _bidder) external payable {
        bidders.push(_bidder);
        userBid[_bidder] = msg.value;
        if (msg.value > userBid[winningBid]) {
            winningBid = _bidder;
        }
    }
    
    function release() external {
        owner.transfer(userBid[winningBid]);
        userBid[winningBid] = 0;
        uint i = 0;
        address payable account;
        while (i < bidders.length) {
            account = bidders[i];
            account.transfer(userBid[account]);
            i++;
        }
    }
}