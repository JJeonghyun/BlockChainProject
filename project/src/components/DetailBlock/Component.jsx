import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DetailBlockComponent = ({ moveDetail, blockInfo }) => {
  useEffect(() => {
    moveDetail();
  }, []);

  return (
    <DetailBlockBox>
      <div>
        <div>Block</div>
        <div>No. {blockInfo.height}</div>
      </div>
      <div>
        <div>
          <div>Block Height : </div>
          <div>Timestamp : </div>
          <div>Transactions : </div>
          <div>Fee Recipient : </div>
          <div>difficulty : </div>
          <div>size : </div>
          <div>Gas Used : </div>
          <div>Gas Limit : </div>
          <div>hash : </div>
          <div>parentHash : </div>
        </div>
        <div>
          <div>{blockInfo.height}</div>
          <div>{new Date(blockInfo.timestamp * 1000).toLocaleString()} UTC</div>
          <div>
            <Link to={`/txs?number=${blockInfo.txs ? blockInfo.height : 0}`}>
              {blockInfo.txs
                ? blockInfo.txs + " transactions"
                : 0 + " transactions"}
            </Link>
          </div>
          <div>
            <Link to={`/address/${blockInfo.miner}`}>{blockInfo.miner}</Link>
          </div>
          <div>{blockInfo.difficulty}</div>
          <div>{blockInfo.size} bytes</div>
          <div>{blockInfo.gasUsed ? blockInfo.gasUsed : 0}</div>
          <div>{blockInfo.gasLimit ? blockInfo.gasLimit : 0}</div>
          <div>{blockInfo.hash}</div>
          <div>{blockInfo.parentHash}</div>
        </div>
      </div>
    </DetailBlockBox>
  );
};
export default DetailBlockComponent;
const DetailBlockBox = styled.div`
  width: 75%;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: rgba(7, 132, 195, 1);
  }
  & > div:first-child {
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & > div {
      font-size: 2rem;
    }
    & > div:first-child {
      font-weight: 750;
    }
    & > div:last-child {
      padding: 0 0 0 10px;
      color: gray;
    }
  }

  & > div:last-child {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 10px;
    box-shadow: 2px 2px 2px 2px;
    border-radius: 10px;
    margin: 20px 0 0 0;
    & > div:first-child {
      width: 20%;
      & > div {
        padding: 10px 0;
        color: gray;
      }
    }
    & > div:last-child {
      width: 74%;
      & > div {
        padding: 10px 0;
      }
    }
  }
`;
