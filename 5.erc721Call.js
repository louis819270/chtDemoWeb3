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

const contract = new web3.eth.Contract(MyERC721JSON.abi, config.address.contract2, {
    from: addr1
});

contract.methods.name().call((err, data) => {
    if (err) return console.log(err);
    console.log('name: ' + data)
})

contract.methods.symbol().call((err, data) => {
    if (err) return console.log(err);
    console.log('symbol: ' + data)
})

contract.methods.balanceOf(addr1).call((err, data) => {
    if (err) return console.log(err);
    console.log('addr1 balance: '+ data)
})

contract.methods.balanceOf(addr2).call((err, data) => {
    if (err) return console.log(err);
    console.log('addr2 balance: '+ data)
})

contract.methods.totalSupply().call((err, data) => {
    if (err) return console.log(err);
    console.log('totalSupply: '+ data)
})
