const config = require('./env.json')

const MyERC20JSON = require('./build/contracts/MyERC20.json')
const MyERC721JSON = require('./build/contracts/MyERC721.json')

const Web3 = require('web3')
const Contract = require('web3-eth-contract')

const host = config.networks.development.host
const port = config.networks.development.port

const addr1 = config.address.addr1
const addr2 = config.address.addr2

const web3 = new Web3(`http://${host}:${port}`)

// web3.eth.personal.unlockAccount(addr2, '123', 600)

web3.eth.sendTransaction({
    from: addr1,
    to: addr2,
    value: 10000000000000000000
}, (err, x) => {
    if (err) {
        console.log(err)
    }
    console.log("transactionHash: ", x)
}).then(receipt => {
    console.log(receipt)
})
