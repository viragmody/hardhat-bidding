/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");

task("accounts", "Prints accounts", async (_, { web3 }) => {
  
  console.log(await web3.eth.getAccounts());
  
});

task("balance", "Prints balances", async (_, { web3 }) => {
  
  console.log(await web3.eth.getBalance('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'));
  console.log(await web3.eth.getBalance('0x70997970C51812dc3A010C7d01b50e0d17dc79C8'));
  console.log(await web3.eth.getBalance('0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC'));
  
});

module.exports = {
  solidity: "0.7.4",
};
