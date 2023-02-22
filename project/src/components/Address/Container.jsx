import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AddressComponent from "./Component";

const AddressContainer = () => {
  const [addInfo, setAddress] = useState([]);
  const [addLength, setLength] = useState(0);
  const [currPage, setCurrPage] = useState(1); // 현재 페이지
  const [pageNumber, setPageNumber] = useState(10); // 페이지당 보여줄 개수

  const [lastIdx, setLastIdx] = useState(0);
  const [firstIdx, setFirstIdx] = useState(0);
  const [currPost, setCurrPost] = useState([]);

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
        setLength(data.data.addrList.length);
      })
      .catch((err) => console.log(err));
  };

  const getBalance = () => {
    axios
      .post("http://localhost:8083/api/address/balance", {
        address: params.addressInfo,
      })
      .then((data) => {
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

  const setPage = (e) => {
    setCurrPage(e);
  };

  useEffect(() => {
    setLength(addInfo.length);
    setLastIdx(currPage * pageNumber);
    setFirstIdx(lastIdx - pageNumber);
    setCurrPost(addInfo.slice(firstIdx, lastIdx));
  }, [currPage, firstIdx, lastIdx, addInfo, pageNumber]);

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
      addLength={addLength}
      setPageNumber={setPageNumber}
      setPage={setPage}
      currPost={currPost}
      pageNumber={pageNumber}
      currPage={currPage}
    />
  );
};
export default AddressContainer;
