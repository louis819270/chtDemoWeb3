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

web3.eth.getBalance(user1.address).then(x => {
    console.log('addr1 balance: ' + x)
})

web3.eth.getBalance(user2.address).then(x => {
    console.log('addr2 balance: ' + x)
})
