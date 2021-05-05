const { expect } = require('chai');
const { assert } = require('chai');
const { waffle } = require("hardhat");
const provider = waffle.provider;



describe("Token contract", function () {

    let Bidding;
    let hardhatBidding;
    let owner;
    let addr1;
    let addr2;
    let addr3;

    beforeEach(async function () {
        [owner, addr1, addr2, addr3] = provider.getWallets();
        Bidding = await ethers.getContractFactory("Bidding");
        hardhatBidding = await Bidding.deploy(50, 50, "cat");
        hardhatBidding.deployed();
    });
    it("Deposit Funds", async function() {
        await hardhatBidding.connect(addr1).depositBid({ value: 1000000000000000 });
        await hardhatBidding.connect(addr2).depositBid({ value: 2 });
        await hardhatBidding.connect(addr3).depositBid({ value: 3 });
        expect(await web3.eth.getBalance(addr1.address)).to.not.equal(100);
    });
    it("CloseBid", async function() {
        await hardhatBidding.closeBid();
//        expect(await web3.eth.getBalance(owner.address)).to.be.equal(100);
        expect(await addr1.address.getBalance).to.be.equal(100);
  
    });
});