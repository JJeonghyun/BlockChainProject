import { useEffect } from "react";
import styled from "styled-components";

const TotalTxsComponent = ({ txList, totalTxs }) => {
  useEffect(() => {
    totalTxs();
  }, []);
  return (
    <TxsBox>
      <div>Transactions</div>
      <div>
        <div>
          <div>TxHash</div>
          <div>Height</div>
          <div>Time</div>
          <div>From</div>
          <div>To</div>
          <div>value</div>
        </div>
        {txList?.map((item, index) => (
          <div key={`itemBox-txs-${index}`}>
            <div key={`txs-hash-${index}`}>{item.hash}</div>
            <div key={`txs-blockNumber-${index}`}>{item.Block.number}</div>
            <div key={`txs-blockTime-${index}`}>
              {new Date(item.Block.time).getSeconds()} sec
            </div>
            <div key={`txs-from-${index}`}>{item.from}</div>
            <div key={`txs-to-${index}`}>{item.to}</div>
            <div key={`txs-value-${index}`}>
              {item.value / Math.pow(10, 18)} ETH
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

  & > div:first-child {
    padding: 10px 0;
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
      & > div {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
      }
      & > div:first-child,
      & > div:nth-child(4),
      & > div:nth-child(5) {
        width: 25%;
      }
      & > div:nth-child(2),
      & > div:nth-child(3) {
        width: 5%;
      }
      & > div:last-child {
        width: 10%;
      }
    }
  }
`;
