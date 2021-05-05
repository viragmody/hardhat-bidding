pragma solidity =0.7.4;
import "./escrow.sol";

contract Bidding {
    // event4bid
    // event4initalize
    struct auction {
        uint bidMin;
        uint duration;
        uint deadline;
        string description;
        address owner;
    }
    Escrow public escrowAddr;
    auction[] public Auctions;
    uint public _balance;

    constructor(uint _bidMin, uint _minutes, string memory _description) public {
        address payable _owner = payable(msg.sender);
        escrowAddr = new Escrow(_owner);
        auction memory Auction = auction ({
            bidMin: _bidMin,
            duration: _minutes,
            deadline : block.timestamp + (_minutes * 1 minutes),
            description: _description,
            owner: _owner
        });
        Auctions.push(Auction);
        // Emit event4initalize
    }
    
    function depositBid() external payable {
        address bidder = (msg.sender);
        escrowAddr.record{value: msg.value}(payable(bidder));
        // emit4bid
    }
    
    function closeBid() public returns(uint) {
        // require(block.timestamp >= Auctions[0].deadline);
        escrowAddr.release();
    }
    
}