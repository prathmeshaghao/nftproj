require("@nomiclabs/hardhat-waffle");
// require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.1",
  networks: {
    goerli: {
      url: process.env.QUICKNODE_API_KEY_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },

    // mainnet: {
    //   chainId: 1,
    //   url: process.env.PROD_QUICKNODE_KEY,
    //   accounts: [process.env.PRIVATE_KEY],
    // },

    // etherscan: {
    //   // Your API key for Etherscan
    //   // Obtain one at https://etherscan.io/
    //   apikey: process.env.ETHERSCAN_API_KEY,
    // },
  },
};
