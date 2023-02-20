import axios from "axios";
import { useState } from "react";
import qs from "query-string";
import { useLocation } from "react-router-dom";

import TotalTxsComponent from "./Component";

const TotalTxsContainer = () => {
  const [txList, setTxlist] = useState([]);
  const location = useLocation().search;
  const query = qs.parse(location);

  const totalTxs = () => {
    axios
      .post("http://localhost:8083/api/transaction/txList", query)
      .then((data) => {
        setTxlist(data.data.list);
      });
  };

  return <TotalTxsComponent txList={txList} totalTxs={totalTxs} />;
};
export default TotalTxsContainer;
