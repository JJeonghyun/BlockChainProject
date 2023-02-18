import axios from "axios";
import { useState } from "react";

import TotalTxsComponent from "./Component";

const TotalTxsContainer = () => {
  const [txList, setTxlist] = useState([]);

  const totalTxs = () => {
    axios.post("http://localhost:8083/api/transaction/txList").then((data) => {
      console.log(data);
      setTxlist(data.data.list);
    });
  };

  return <TotalTxsComponent txList={txList} totalTxs={totalTxs} />;
};
export default TotalTxsContainer;
