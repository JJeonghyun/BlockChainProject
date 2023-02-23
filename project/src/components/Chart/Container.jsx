import axios from "axios";
import { useEffect, useState } from "react";

import ChartComponent from "./Component";

const ChartContainer = () => {
  const [txs, setTxList] = useState([]);
  const blockListUp = () => {
    axios.get("http://localhost:8083/api/block/list").then((data) => {
      setTxList(data.data.blockList);
    });
  };

  useEffect(() => {
    blockListUp();
  }, []);

  return <ChartComponent txs={txs} />;
};
export default ChartContainer;
