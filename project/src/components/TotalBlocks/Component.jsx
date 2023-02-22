import { Link } from "react-router-dom";
import styled from "styled-components";

import { Paging } from "../Paging/Paging";

const TotalBlocksComponent = ({
  totalNum,
  setPage,
  currPost,
  currPage,
  setPageNumber,
  pageNumber,
}) => {
  return (
    <BlocksBox>
      <div>Total of {totalNum} Blocks</div>
      <div>
        <div>
          <div>Height</div>
          <div>Time</div>
          <div>Txn</div>
          <div>Fee Recipient</div>
          <div>Gas Used</div>
          <div>Gas Limit</div>
          <div>Hash</div>
        </div>
        {currPost?.map((item, index) => (
          <div key={`itemBox-blocks-${index}`}>
            <div key={`blocks-number-${index}`}>
              <Link to={`/blocks/${item.number}`}>{item.number}</Link>
            </div>
            <div key={`blocks-time-${index}`}>
              {new Date(item.time * 1000).toLocaleString()}
            </div>
            <div key={`blocks-txn-${index}`}>
              <Link to={`/txs?number=${item.number}`}>
                {item.txs ? item.txs : 0}
              </Link>
            </div>
            <div key={`blocks-miner-${index}`}>
              <Link to={`/address/${item.miner}`}>{item.miner}</Link>
            </div>

            <div key={`blocks-gasUsed-${index}`}>{item.gasUsed}</div>

            <div key={`blocks-gasLimit-${index}`}>{item.gasLimit}</div>
            <div key={`blocks-hash-${index}`}>{item.hash}</div>
          </div>
        ))}
      </div>
      <div>
        <span>Show rows</span>
        <select
          onChange={(e) => {
            setPageNumber(+e.target.value);
          }}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      <Paging
        page={currPage}
        count={totalNum}
        setPage={setPage}
        pageNumber={pageNumber}
      />
    </BlocksBox>
  );
};
export default TotalBlocksComponent;

const BlocksBox = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 10px 0 0 0;

  a {
    text-decoration: none;
    color: rgba(7, 132, 195, 1);
  }

  & > div:first-child {
    padding: 10px 0;
    font-size: 2rem;
    font-weight: 700;
  }

  & > div:nth-child(2) {
    width: 100%;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px gray;
    padding: 10px;

    & > div:first-child {
      & > div {
        font-weight: 750;
      }
    }

    & > div {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 2px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      & > div {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        padding: 5px 0;
      }
      & > div:first-child,
      & > div:nth-child(3) {
        width: 5%;
      }
      & > div:nth-child(2) {
        width: 15%;
      }

      & > div:nth-child(4) {
        width: 25%;
      }
      & > div:nth-child(5),
      & > div:nth-child(6) {
        width: 8%;
      }

      & > div:last-child {
        width: 30%;
      }
    }
  }
  & > div:nth-child(3) {
    display: inline-block;
    width: fit-content;
    & > span {
      padding: 0 10px 0 0;
    }
    & > select {
      padding: 5px 10px;
    }
  }
`;
