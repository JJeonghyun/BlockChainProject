import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DetailTxComponent = ({ moveDetail, txInfo }) => {
  useEffect(() => {
    moveDetail();
  }, []);

  return (
    <DetailTxBox>
      <div>
        <div>Transaction Details</div>
      </div>
      <div>
        <div>
          <div>Transaction Hash</div>
          <div>Status</div>
          <div>Block</div>
          <div>TimeStamp</div>
          <div>From</div>
          <div>To</div>
          <div>Value</div>
          <div>Transactions</div>
          <div>TxIdx</div>
          <div>Gas Limit</div>
          <div>Gas Used</div>
        </div>
        <div>
          <div>{txInfo.txHash}</div>
          <div>{txInfo.txStatus ? txInfo.txStatus : "success"}</div>
          <div>
            <Link to={`/blocks/${txInfo.block}`}>{txInfo.block}</Link>
          </div>
          <div>{new Date(txInfo.time * 1000).toLocaleString()}</div>
          <div>
            <Link to={`/address/${txInfo.from}`}>{txInfo.from}</Link>
          </div>
          <div>
            <Link to={`/address/${txInfo.to}`}>{txInfo.to}</Link>
          </div>
          <div>{txInfo.value / Math.pow(10, 18)} ETH</div>
          <div>{txInfo.nonce}</div>
          <div>{txInfo.txIdx}</div>
          <div>{txInfo.gasUsed ? txInfo.gasUsed : 0}</div>
          <div>{txInfo.gasLimit ? txInfo.gasLimit : 0}</div>
        </div>
      </div>
    </DetailTxBox>
  );
};
export default DetailTxComponent;

const DetailTxBox = styled.div`
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
      font-weight: 750;
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
      width: 24%;
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
