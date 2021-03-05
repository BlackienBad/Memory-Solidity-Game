require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
  },
  contracts_directory: './src/Contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version:"0.5.1",
      settings: {         
        optimizer: {
          enabled: false,
          runs: 200
        },
    }
  }
  }
}