const solc = require("solc");
const path = require("path");
const fs = require("fs");

const contractPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(contractPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "Lottery.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const {
  abi,
  evm: {
    bytecode: { object: bytecode },
  },
} = JSON.parse(solc.compile(JSON.stringify(input))).contracts["Lottery.sol"][
  "Lottery"
];

module.exports = { abi, bytecode };
