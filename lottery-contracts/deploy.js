const fs = require("fs");
const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "they front exile forum lottery depart oven install demand trophy shallow wait",
  // remember to change this to your own phrase!
  "https://rinkeby.infura.io/v3/35591972e70f47c78fbe00c49ea4b9f7"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  fs.writeFileSync(
    "./abis/lottery.json",
    JSON.stringify(interface).replace(/\\/g, "")
  );
  console.log(interface);
  console.log("Contract deployed to", result.options.address);
};

deploy();
