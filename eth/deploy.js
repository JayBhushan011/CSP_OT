const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'glad bridge oval vicious quiz trouble certain anger grit clerk legend banana',
    'https://rinkeby.infura.io/v3/22252705028d4829936a8d474c3b33ff'
);

const web3 = new Web3(provider);

//write function to use async await
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode, arguments:['Hi there!'] })
      .send( { gas: '1000000',from: accounts[0] });

    console.log(interface);
    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
};

deploy();