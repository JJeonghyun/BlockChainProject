import { useState } from "react";
import axios from "axios";

import BlocksComponent from "./Component";
const request = axios.create({
  method: "POST",
  baseURL: "http://localhost:8080",
  header: {
    "content-type": "application/json",
  },
});

const BlocksContainer = () => {
  const [blockList, setBlock] = useState([]);

  const blocks = async () => {
    const accountData = await axios.get(
      "http://localhost:8083/api/block/accounts"
    );
    await request({
      data: {
        id: 50,
        jsonrpc: "2.0",
        method: "personal_unlockAccount",
        params: [accountData.data.accounts[0], "wkdwjdgus1"],
      },
    });
    await request({
      data: {
        id: 50,
        jsonrpc: "2.0",
        method: "miner_setEtherbase",
        params: [accountData.data.accounts[0]],
      },
    });
    const data = await axios.post(
      "http://localhost:8083/api/block/latestBlocks"
    );
    setBlock(data.data.list);
  };

  return <BlocksComponent blockList={blockList} blocks={blocks} />;
};
export default BlocksContainer;
