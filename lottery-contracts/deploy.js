const fs = require("fs");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, bytecode } = require("./compile");

const infuraUrl = "INFURA URL";
const mnemonic = "YOUR MNEMONIC PHRASE";

const provider = new HDWalletProvider(mnemonic, infuraUrl);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  fs.writeFileSync(
    "./abis/lottery.json",
    JSON.stringify(abi).replace(/\\/g, "")
  );

  provider.engine.stop();
  // console.log(abi);
  console.log("Contract deployed to", result.options.address);
};

deploy();
