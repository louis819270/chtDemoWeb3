const config = require('./env.json')

const MyERC20JSON = require('./build/contracts/MyERC20.json')
const MyERC721JSON = require('./build/contracts/MyERC721.json')

const Web3 = require('web3')
const Contract = require('web3-eth-contract')

const host = config.networks.development.host
const port = config.networks.development.port

const user1 = config.account.addr1
const user2 = config.account.addr2

const web3 = new Web3(`http://${host}:${port}`)

// web3.eth.personal.unlockAccount(user1.address, user1.pwd, 600)
// web3.eth.personal.unlockAccount(user2.address, user1.pwd, 600)

const contract = new web3.eth.Contract(MyERC20JSON.abi, config.contract.contract1, {
    from: user1.address
});

contract.methods.transfer(user2.address, 100).send((err, data) => {
    if (err) return console.log(err);
    console.log('transactionHash: ' + data)
}).then(receipt => {
    console.log(receipt)
})
