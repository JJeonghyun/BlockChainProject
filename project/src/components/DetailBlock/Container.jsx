import { useParams } from "react-router-dom";
import axios from "axios";

import DetailBlockComponent from "./Component";
import { useState } from "react";

const DetailBlockContainer = () => {
  const [blockInfo, setInfo] = useState({
    height: "",
    timestamp: 0,
    hash: "",
    nonce: 0,
    parentHash: "",
    gasUsed: 0,
    gasLimit: 0,
    size: 0,
  });
  const params = useParams();

  console.log(params.blockInfo);

  const moveDetail = () => {
    axios
      .post("http://localhost:8083/api/block/detail", {
        number: params.blockInfo,
      })
      .then((data) => {
        console.log(data.data.block);
        const {
          hash,
          number,
          nonce,
          time,
          parentHash,
          gasLimit,
          gasUsed,
          size,
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
        });
      });
  };

  return <DetailBlockComponent moveDetail={moveDetail} blockInfo={blockInfo} />;
};
export default DetailBlockContainer;
