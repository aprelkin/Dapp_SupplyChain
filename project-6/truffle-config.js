const INFURA_API_KEY = "MY_KEY";
const MNEMONIC = "MY_MNEMONIC"
const HDWalletProvider = require('truffle-hdwallet-provider');


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id,
      websockets: true
    },
    sepolia: {

      provider: () => {
        return new HDWalletProvider(MNEMONIC, "https://sepolia.infura.io/v3/" + INFURA_API_KEY)
      },
      network_id: '11155111',
      gas: 4465030
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.16"
    }
  }
};