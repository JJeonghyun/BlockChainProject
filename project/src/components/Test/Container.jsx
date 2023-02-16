import TestComponent from "./Component";
import axios from "axios";
import { useState } from "react";
import Web3 from "web3";

const request = axios.create({
  method: "POST",
  baseURL: "http://localhost:8080",
  headers: {
    "content-type": "application/json",
  },
});

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8080"));

const TestContainer = () => {
  const [accountsInfo, setAccounts] = useState([]);
  const listUp = () => {
    request({
      data: {
        id: 50,
        jsonrpc: "2.0",
        method: "eth_accounts",
      },
    }).then(({ data: { result } }) => {
      axios.post("http://localhost:8083/api/block", result);
      setAccounts(result);
    });
  };

  const numberCall = async () => {
    await web3.eth.getBlockNumber((err, number) => {
      if (err) return console.log(err);
      axios.post("http://localhost:8083/api/block/getBlock", { number });
    });
  };
  numberCall();
  return <TestComponent listUp={listUp} accountsInfo={accountsInfo} />;
};
export default TestContainer;
