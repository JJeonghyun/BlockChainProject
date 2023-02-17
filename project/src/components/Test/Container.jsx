import TestComponent from "./Component";
import axios from "axios";
import { useState } from "react";

const TestContainer = () => {
  const [accountsInfo, setAccounts] = useState([]);

  const sendTx = () => {
    axios.post("http://localhost:8083/api/block/sendTx").then((data) => {
      console.log(data);
    });
  };

  return <TestComponent sendTx={sendTx} accountsInfo={accountsInfo} />;
};
export default TestContainer;
