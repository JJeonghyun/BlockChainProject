import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TxsComponent = ({ addTx, txList }) => {
  useEffect(() => {
    addTx();
  }, []);

  return (
    <TxsBox>
      <div>Latest Transactions</div>
      {txList.map((item, index) => (
        <TxsInfo key={`TxsInfo-${index}`}>
          <div key={`firstInfo-${index}`}>
            <img
              src={"https://media.giphy.com/media/RH7HREzgpzUuWMeFJu/giphy.gif"}
              alt=""
              key={`firstInfoImg-${index}`}
            />
          </div>
          <div key={`secondInfo-${index}`}>
            <div key={`secondInfoItem1-${index}`}>
              <span key={`secondInfo-txhash-${index}`}>
                <Link to={`/txs/${item.hash}`}>{item.hash}</Link>
              </span>
            </div>
            <div key={`secondInfoItem2-${index}`}>
              {new Date(item.Block.time * 1000).toLocaleString()}
            </div>
          </div>
          <div key={`thirdInfo-${index}`}>
            <div key={`thirdInfoItem1-${index}`}>
              From :
              <span key={`thirdInfo-txfrom-${index}`}>
                <Link to={`/address/${item.from}`}> {item.from}</Link>
              </span>
            </div>
            <div key={`thirdInfoItem2-${index}`}>
              To :
              <span key={`thirdInfo-txto-${index}`}>
                <Link to={`/address/${item.to}`}> {item.to}</Link>
              </span>
            </div>
          </div>
          <div key={`lastInfo-${index}`}>
            {item.value / Math.pow(10, 18)} Eth
          </div>
        </TxsInfo>
      ))}
      <div>
        <Link to={"/txs"}>VIEW ALL Txs</Link>
      </div>
    </TxsBox>
  );
};
export default TxsComponent;

const TxsBox = styled.div`
  & > div:first-child {
    padding: 0 0 10px 10px;
    font-weight: 750;
  }
`;

const TxsInfo = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    & > div {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  & > div:first-child {
    width: 8%;
    & > img {
      width: 100%;
    }
  }
  & > div:nth-child(2) {
    width: 25%;
    & > div:first-child {
    }
  }
  & > div:nth-child(3) {
    width: 50%;
  }
  & > div:last-child {
    width: fit-content;
    padding: 0 5px 0 0;
  }
  span {
    cursor: pointer;
    color: rgba(7, 132, 195, 1);
    & > a {
      text-decoration: none;
      color: rgba(7, 132, 195, 1);
    }
  }
`;
