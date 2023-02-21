import { useParams } from "react-router-dom";
import axios from "axios";

import DetailTxComponent from "./Component";
import { useState } from "react";

const DetailTxContainer = () => {
  const [txInfo, setInfo] = useState({
    txHash: "",
    txStatus: "success",
    block: 0,
    time: 0,
    from: "",
    to: "",
    value: 0,
    gasLimit: 0,
    gasUsed: 0,
    nonce: 0,
    txIdx: 0,
  });
  const params = useParams();

  const moveDetail = () => {
    axios
      .post("http://localhost:8083/api/transaction/detail", {
        txHash: params.txInfo,
      })
      .then((data) => {
        setInfo({
          txHash: data.data.tx.hash,
          block: data.data.tx.blockNumber,
          time: data.data.tx.Block.time,
          from: data.data.tx.from,
          to: data.data.tx.to,
          value: data.data.tx.value,
          gasLimit: data.data.tx.Block.gasLimit,
          gasUsed: data.data.tx.Block.gasUsed,
          nonce: data.data.tx.nonce,
          txIdx: data.data.tx.transactionIndex,
        });
      });
  };

  return <DetailTxComponent moveDetail={moveDetail} txInfo={txInfo} />;
};
export default DetailTxContainer;
