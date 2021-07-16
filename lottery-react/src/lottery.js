import web3 from "./web3";
import jsonAbi from "./lottery.abi.json";

const address = "0xdf3860d696DEde98D73093C1a3E8a1843A327267";

export default new web3.eth.Contract(jsonAbi, address);
