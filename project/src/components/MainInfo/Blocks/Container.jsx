import { useState } from "react";
import axios from "axios";

import BlocksComponent from "./Component";

const BlocksContainer = () => {
  const [blockList, setBlock] = useState([]);

  const blocks = () => {
    axios.post("http://localhost:8083/api/block/latestBlocks").then((data) => {
      setBlock(data.data.list);
    });
  };
  return <BlocksComponent blockList={blockList} blocks={blocks} />;
};
export default BlocksContainer;
