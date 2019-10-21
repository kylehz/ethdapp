module.exports = {
  networks : {
    ganache : {
      host : 'localhost',
      port : 7545,    // By default Ganache runs on this port.
      network_id : "*" // network_id for ganache is 5777. However, by keeping * as value you can run this node on  any network
    }
  },
  compilers: {
    solc: {
      version: "0.4.25",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};
