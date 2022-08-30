/** @type import('hardhat/config').HardhatUserConfig */

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: {
    version: "0.7.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/QXAPZRBa-_nEPWa2ZQcnfmH4TOH1hxJK",
      accounts: [
        "dccf18f41d6266a08171828d31f04dea3528a58d70e3591d94367a0c8a4183a4"
      ] // add your Ethereum key here (private key)
    },
  }
  };

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});