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

const contract = new web3.eth.Contract(MyERC20JSON.abi, config.address.contract1, {
    from: addr1
});

contract.methods.transfer(addr2, 100).send((err, data) => {
    if (err) return console.log(err);
    console.log('transactionHash: ' + data)
}).then(receipt => {
    console.log(receipt)
})
