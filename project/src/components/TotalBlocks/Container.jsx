import axios from "axios";
import { useState } from "react";

import TotalBlocksComponent from "./Component";

const TotalBlocksContainer = () => {
  const [blockList, setBlocklist] = useState([]);

  const totalBlocks = () => {
    axios.post("http://localhost:8083/api/block/blocksList").then((data) => {
      setBlocklist(data.data.list);
    });
  };

  return (
    <TotalBlocksComponent blockList={blockList} totalBlocks={totalBlocks} />
  );
};
export default TotalBlocksContainer;
