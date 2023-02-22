import axios from "axios";
import { useEffect, useState } from "react";

import TotalBlocksComponent from "./Component";

const TotalBlocksContainer = () => {
  const [blockList, setBlocklist] = useState([]); // 출력할 리스트를 담을 state
  const [totalNum, setNum] = useState(0); // 리스트의 총 개수
  const [currPage, setCurrPage] = useState(1); // 현재 페이지
  const [pageNumber, setPageNumber] = useState(10); // 페이지당 보여줄 개수

  const [lastIdx, setLastIdx] = useState(0);
  const [firstIdx, setFirstIdx] = useState(0);
  const [currPost, setCurrPost] = useState([]);

  const totalBlocks = () => {
    axios.post("http://localhost:8083/api/block/blocksList").then((data) => {
      setBlocklist(data.data.list);
      setNum(data.data.list.length);
    });
  };

  const setPage = (e) => {
    setCurrPage(e);
  };

  useEffect(() => {
    totalBlocks();
  }, []);

  useEffect(() => {
    setNum(blockList.length);
    setLastIdx(currPage * pageNumber);
    setFirstIdx(lastIdx - pageNumber);
    setCurrPost(blockList.slice(firstIdx, lastIdx));
  }, [currPage, firstIdx, lastIdx, blockList, pageNumber]);

  return (
    <TotalBlocksComponent
      blockList={blockList}
      totalBlocks={totalBlocks}
      totalNum={totalNum}
      setPage={setPage}
      currPost={currPost}
      currPage={currPage}
      pageNumber={pageNumber}
      setPageNumber={setPageNumber}
    />
  );
};
export default TotalBlocksContainer;
