import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import DetailBlockComponent from "./Component";

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
  const navigate = useNavigate();

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
      })
      .catch((err) => {
        console.log(err);
        navigate(`/${params.blockInfo}`);
      });
  };

  return <DetailBlockComponent moveDetail={moveDetail} blockInfo={blockInfo} />;
};
export default DetailBlockContainer;
