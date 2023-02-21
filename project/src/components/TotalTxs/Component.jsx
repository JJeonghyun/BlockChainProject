import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TotalTxsComponent = ({ txList, totalTxs, txLength }) => {
  useEffect(() => {
    totalTxs();
  }, []);
  return (
    <TxsBox>
      <div>Total of {txLength} Transactions found</div>
      <div>
        <div>
          <div>TxHash</div>
          <div>Block</div>
          <div>Time</div>
          <div>From</div>
          <div>To</div>
          <div>value</div>
        </div>
        {txList?.map((item, index) => (
          <div key={`itemBox-txs-${index}`}>
            <div key={`txs-hash-${index}`}>
              <Link to={`/txs/${item.hash}`}>{item.hash}</Link>
            </div>
            <div key={`txs-blockNumber-${index}`}>
              <Link to={`/blocks/${item.Block.number}`}>
                {item.Block.number}
              </Link>
            </div>
            <div key={`txs-blockTime-${index}`}>
              {new Date(item.Block.time * 1000).toLocaleString()}
            </div>
            <div key={`txs-from-${index}`}>
              <Link to={`/address/${item.from}`}>{item.from}</Link>
            </div>
            <div key={`txs-to-${index}`}>
              <Link to={`/address/${item.to}`}>{item.to}</Link>
            </div>
            <div key={`txs-value-${index}`}>
              {parseInt(item.value / Math.pow(10, 18))} ETH
            </div>
          </div>
        ))}
      </div>
    </TxsBox>
  );
};
export default TotalTxsComponent;

const TxsBox = styled.div`
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

  & > div:last-child {
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
      & > div:nth-child(3) {
        width: 15%;
      }
      & > div:nth-child(2),
      & > div:last-child {
        width: 5%;
      }
    }
  }
`;
