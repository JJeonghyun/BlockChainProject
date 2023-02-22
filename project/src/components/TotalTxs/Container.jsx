import axios from "axios";
import { useState, useEffect } from "react";
import qs from "query-string";
import { useLocation } from "react-router-dom";

import TotalTxsComponent from "./Component";

const TotalTxsContainer = () => {
  const [txList, setTxlist] = useState([]);
  const [txLength, setLength] = useState(0);
  const [currPage, setCurrPage] = useState(1); // 현재 페이지
  const [pageNumber, setPageNumber] = useState(10); // 페이지당 보여줄 개수

  const [lastIdx, setLastIdx] = useState(0);
  const [firstIdx, setFirstIdx] = useState(0);
  const [currPost, setCurrPost] = useState([]);

  const location = useLocation().search;
  const query = qs.parse(location);

  const totalTxs = () => {
    axios
      .post("http://localhost:8083/api/transaction/txList", query)
      .then((data) => {
        setTxlist(data.data.list);
        setLength(data.data.list.length);
      });
  };

  const setPage = (e) => {
    setCurrPage(e);
  };

  useEffect(() => {
    totalTxs();
  }, []);

  useEffect(() => {
    setLength(txList.length);
    setLastIdx(currPage * pageNumber);
    setFirstIdx(lastIdx - pageNumber);
    setCurrPost(txList.slice(firstIdx, lastIdx));
  }, [currPage, firstIdx, lastIdx, txList, pageNumber]);

  return (
    <TotalTxsComponent
      txList={txList}
      txLength={txLength}
      setPage={setPage}
      currPost={currPost}
      currPage={currPage}
      pageNumber={pageNumber}
      setPageNumber={setPageNumber}
    />
  );
};
export default TotalTxsContainer;
