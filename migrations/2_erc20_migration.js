const MyERC20 = artifacts.require("MyERC20")

module.exports = function (deployer) {
  deployer.deploy(MyERC20).then(async (i) => {
    console.log("complete deploy, MyERC20's contract address: " + i.address)
  })
};
