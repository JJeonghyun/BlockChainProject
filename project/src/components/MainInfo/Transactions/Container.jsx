import axios from "axios";
import { useState } from "react";

import TxsComponent from "./Component";

const TxsContainer = () => {
  const [txList, setTx] = useState([]);

  const addTx = () => {
    axios.post("http://localhost:8083/api/block/addTx").then((data) => {
      setTx(data.data.list);
    });
  };

  return <TxsComponent addTx={addTx} txList={txList} />;
};
export default TxsContainer;
