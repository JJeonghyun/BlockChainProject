import { useParams } from "react-router-dom";
import axios from "axios";

import DetailBlockComponent from "./Component";
import { useState } from "react";

const DetailBlockContainer = () => {
  const [blockInfo, setInfo] = useState({
    height: "",
    timestamp: 0,
    hash: "",
    difficulty: 0,
    parentHash: "",
    gasUsed: 0,
    gasLimit: 0,
    size: 0,
    txs: 0,
    miner: "",
  });
  const params = useParams();

  const moveDetail = () => {
    axios
      .post("http://localhost:8083/api/block/detail", {
        number: params.blockInfo,
      })
      .then((data) => {
        const {
          hash,
          number,
          nonce,
          time,
          parentHash,
          gasLimit,
          gasUsed,
          size,
          txs,
          miner,
          difficulty,
        } = data.data.block;
        setInfo({
          height: number,
          timestamp: time,
          parentHash,
          nonce,
          gasUsed,
          size,
          gasLimit,
          hash,
          txs,
          miner,
          difficulty,
        });
      });
  };

  return <DetailBlockComponent moveDetail={moveDetail} blockInfo={blockInfo} />;
};
export default DetailBlockContainer;
