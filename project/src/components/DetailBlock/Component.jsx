import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DetailBlockComponent = ({ moveDetail, blockInfo }) => {
  useEffect(() => {
    moveDetail();
  }, []);

  return (
    <DetailBlockBox>
      <div>Blocks</div>
      <div>
        <div>
          <div>Block Height</div>
          <div>Timestamp</div>
          <div>parentHash</div>
          <div>Fee Recipient</div>
          <div>nonce</div>
          <div>size</div>
          <div>Transactions</div>
          <div>Gas Used</div>
          <div>Gas Limit</div>
          <div>hash</div>
        </div>
        <div>
          <div>{blockInfo.height}</div>
          <div>
            {Math.floor(
              (Math.floor(new Date().getTime() / 1000) - blockInfo.timestamp) /
                1000
            )}{" "}
            secs ago
          </div>
          <div>{blockInfo.parentHash}</div>
          <div>
            <Link to={`/address/${blockInfo.miner}`}>{blockInfo.miner}</Link>
          </div>
          <div>{blockInfo.nonce}</div>
          <div>{blockInfo.size}</div>
          <div>
            <Link to={`/txs?number=${blockInfo.txs ? blockInfo.txs : 0}`}>
              {blockInfo.txs
                ? blockInfo.txs + " transactions"
                : 0 + " transactions"}
            </Link>
          </div>

          <div>{blockInfo.gasUsed ? blockInfo.gasUsed : 0}</div>
          <div>{blockInfo.gasLimit ? blockInfo.gasLimit : 0}</div>
          <div>{blockInfo.hash}</div>
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
    border-bottom: 1px solid black;
  }

  & > div:last-child {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    & > div:first-child {
      width: 24%;
      & > div {
        padding: 10px 0;
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
