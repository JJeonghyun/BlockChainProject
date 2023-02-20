import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DetailTxComponent = ({ moveDetail, txInfo }) => {
  useEffect(() => {
    moveDetail();
  }, []);

  return (
    <DetailTxBox>
      <div>Transaction</div>
      <div>
        <div>
          <div>Transaction Hash</div>
          <div>Status</div>
          <div>Block</div>
          <div>TimeStamp</div>
          <div>From</div>
          <div>To</div>
          <div>Value</div>
          <div>Gas Limit</div>
          <div>Gas Used</div>
        </div>
        <div>
          <div>{txInfo.txHash}</div>
          <div>{txInfo.txStatus ? txInfo.txStatus : "success"}</div>
          <div>
            <Link to={`/blocks/${txInfo.block}`}>{txInfo.block}</Link>
          </div>
          <div>
            {Math.floor(
              (parseInt(new Date().getTime() / 1000) - txInfo.time) / 3600
            )}
          </div>
          <div>
            <Link to={`/address/${txInfo.from}`}>{txInfo.from}</Link>
          </div>
          <div>
            <Link to={`/address/${txInfo.to}`}>{txInfo.to}</Link>
          </div>
          <div>{txInfo.value / Math.pow(10, 18)} ETH</div>
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
