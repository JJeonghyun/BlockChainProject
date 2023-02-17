import { useState } from "react";
import axios from "axios";

import BlocksComponent from "./Component";

const BlocksContainer = () => {
  const [blockList, setBlock] = useState([]);
  // height, timestamps, recipient, txlength, ETH

  const blocks = () => {
    axios.post("http://localhost:8083/api/block/latestBlocks").then((data) => {
      console.log(data);
      setBlock(data.data.list);
    });
  };
  return <BlocksComponent blockList={blockList} blocks={blocks} />;
};
export default BlocksContainer;
