import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

import AddressComponent from "./Component";

const AddressContainer = () => {
  const [addInfo, setAddress] = useState([]);
  const [balance, setBalance] = useState(0);
  const [lastTxInfo, setLastTxInfo] = useState({
    hash: "",
    time: 0,
  });
  const [firstTxInfo, setFirstTxInfo] = useState({
    hash: "",
    time: 0,
  });
  const params = useParams();

  const addressInfo = () => {
    axios
      .post("http://localhost:8083/api/address/info", {
        address: params.addressInfo,
      })
      .then((data) => {
        setAddress(data.data.addrList);
      })
      .catch((err) => console.log(err));
  };

  const getBalance = () => {
    axios
      .post("http://localhost:8083/api/address/balance", {
        address: params.addressInfo,
      })
      .then((data) => {
        console.log(data);
        setBalance(data.data.balance);
      })
      .catch((err) => console.log(err));
  };

  const lastTx = () => {
    axios
      .post("http://localhost:8083/api/transaction/findTx", {
        address: params.addressInfo,
      })
      .then((data) => {
        console.log(data.data.lastTx);
        console.log(data.data.firstTx);
        setLastTxInfo({
          hash: data.data.lastTx.hash,
          time: data.data.lastTx.Block.time,
        });
        setFirstTxInfo({
          hash: data.data.firstTx.hash,
          time: data.data.firstTx.Block.time,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AddressComponent
      addressInfo={addressInfo}
      addInfo={addInfo}
      info={params.addressInfo}
      getBalance={getBalance}
      balance={balance}
      lastTx={lastTx}
      lastTxInfo={lastTxInfo}
      firstTxInfo={firstTxInfo}
    />
  );
};
export default AddressContainer;
