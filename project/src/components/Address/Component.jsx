import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Paging } from "../Paging/Paging";

const AddressComponent = ({
  addressInfo,
  info,
  getBalance,
  balance,
  lastTx,
  lastTxInfo,
  firstTxInfo,
  addLength,
  setPageNumber,
  setPage,
  currPost,
  pageNumber,
  currPage,
}) => {
  useEffect(() => {
    addressInfo();
    getBalance();
    lastTx();
  }, []);
  return (
    <AddressBox>
      <div>
        <div>Address</div>
        <div>{info}</div>
      </div>
      <div>
        <div>
          <div>Overview</div>
          <div>
            <div>ETH BALANCE</div>
            <div>{balance / Math.pow(10, 18)} ETH</div>
          </div>
          <div>
            <div>LAST TXN SENT</div>
            <div>
              <Link to={`/txs/${lastTxInfo.hash}`}>{lastTxInfo.hash}</Link>
              {lastTxInfo.hash
                ? " CREATED " +
                  new Date(lastTxInfo.time * 1000).toLocaleString()
                : ""}
            </div>
          </div>
          <div>
            <div>FIRST TXN SENT</div>
            <div>
              <Link to={`/txs/${firstTxInfo.hash}`}>{firstTxInfo.hash}</Link>
              {firstTxInfo.hash
                ? " CREATED " +
                  new Date(firstTxInfo.time * 1000).toLocaleString()
                : ""}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>TxHash</div>
          <div>Height</div>
          <div>Date Time (UTC)</div>
          <div>From</div>
          <div>To</div>
          <div>value</div>
        </div>
        {currPost.map((item, index) => (
          <div key={`addInfo-box-${index}`}>
            <div key={`addInfo-hash-${index}`}>
              <Link to={`/txs/${item.hash}`}>{item.hash}</Link>
            </div>
            <div key={`addInfo-blockNumber-${index}`}>
              <Link to={`/blocks/${item.blockNumber}`}>{item.blockNumber}</Link>
            </div>
            <div key={`addInfo-time-${index}`}>
              {new Date(item.Block.time * 1000).toLocaleString()}
            </div>
            <div key={`addInfo-from-${index}`}>
              <Link to={`/address/${item.from}`}>{item.from}</Link>
            </div>
            <div key={`addInfo-to-${index}`}>
              <Link to={`/address/${item.to}`}>{item.to}</Link>
            </div>
            <div key={`addInfo-value-${index}`}>
              {parseInt(item.value / Math.pow(10, 18))} ETH
            </div>
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
        count={addLength}
        setPage={setPage}
        pageNumber={pageNumber}
      />
    </AddressBox>
  );
};
export default AddressComponent;

const AddressBox = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 10px 0 0 0;
  a {
    text-decoration: none;
    color: rgba(7, 132, 195, 1);
  }

  & > div:first-child {
    display: flex;
    width: 100%;
    padding: 10px 0;
    font-size: 1.3rem;
    & > div:first-child {
      font-weight: 850;
      padding: 0 10px 0 0;
    }
    & > div:last-child {
      width: fit-content;
    }
  }

  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    & > div {
      width: 100%;
      border: 1px solid black;
      border-radius: 10px;
      box-shadow: 2px 2px 2px 2px gray;
      & > div {
        padding: 1%;
        & > div {
          padding: 5px 0;
        }
      }
      & > div:first-child {
        font-weight: 750;
      }
    }
  }

  & > div:nth-child(3) {
    width: 100%;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px gray;
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
      & > div:first-child {
        width: 30%;
      }
      & > div:nth-child(4),
      & > div:nth-child(5) {
        width: 15%;
      }
      & > div:nth-child(2) {
        width: 5%;
      }
      & > div:nth-child(3) {
        width: 15%;
      }
      & > div:last-child {
        width: 5%;
      }
    }
    & > div:first-child {
      & > div {
        text-align: left;
        padding: 5px 0;
      }
    }
  }
  & > div:nth-child(4) {
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
