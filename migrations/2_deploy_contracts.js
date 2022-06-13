var Owner = artifacts.require("Owner");

module.exports = function(deployer) {
    deployer.deploy(Owner);
    // Additional contracts can be deployed here
};