const config = require('./env.json')

const MyERC20JSON = require('./build/contracts/MyERC20.json')
const MyERC721JSON = require('./build/contracts/MyERC721.json')

const Web3 = require('web3')
const Contract = require('web3-eth-contract')

const host = config.networks.development.host
const port = config.networks.development.port

const addr1 = '0x14ed0b998cc953aa00b37efd4c25c573051afcd8'
const addr2 = '0xf240cbae2a9d051ff97548e29426b724bce2a138'

const web3 = new Web3(`http://${host}:${port}`)
web3.eth.defaultAccount = config.networks.development.from

// web3.eth.getBalance(addr1).then(x => {
//     console.log('addr1 balance: ' + x)
// })

// web3.eth.getBalance(addr2).then(x => {
//     console.log('addr2 balance: ' + x)
// })

// web3.eth.sendTransaction({
//     to: addr2,
//     value: 10000000000000000000
// }, (x) => {
//     console.log(x)
// })

const contract = new web3.eth.Contract(MyERC20JSON.abi, '0xB5F9E25D62AEAd8777a079f81539253768CDbA7B', {
    from: addr1
});

contract.methods.name().call((err, data) => {
    if (err) return console.log(err);
    console.log('name: ' + data)
})

contract.methods.symbol().call((err, data) => {
    if (err) return console.log(err);
    console.log('symbol' + data)
})

contract.methods.balanceOf(addr1).call((err, data) => {
    if (err) return console.log(err);
    console.log('addr1 balance: '+ data)
})

contract.methods.balanceOf(addr2).call((err, data) => {
    if (err) return console.log(err);
    console.log('addr2 balance: '+ data)
})

contract.methods.transfer(addr2, 100).send((err, data) => {
    if (err) return console.log(err);
    console.log('transfer: '+ data)
})
