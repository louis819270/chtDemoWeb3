const MyERC721 = artifacts.require("MyERC721")

module.exports = function (deployer) {
  deployer.deploy(MyERC721, "DM", "demo721").then(async (i) => {
    console.log("complete deploy, MyERC721's contract address: " + i.address)
  })
};
