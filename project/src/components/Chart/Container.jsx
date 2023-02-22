import axios from "axios";
import { useEffect, useState } from "react";

import ChartComponent from "./Component";

const ChartContainer = () => {
  const [txs, setTxList] = useState([]);
  const txListUp = () => {
    axios.get("http://localhost:8083/api/transaction").then((data) => {
      console.log(data);
      setTxList(data.data.txlistUp);
    });
  };

  useEffect(() => {
    txListUp();
  }, []);

  return <ChartComponent txs={txs} />;
};
export default ChartContainer;
