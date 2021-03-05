const MemoryDoge = artifacts.require("MemoryDoge");

module.exports = function(deployer) {
  deployer.deploy(MemoryDoge);
};
