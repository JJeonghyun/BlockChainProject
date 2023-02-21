import styled from "styled-components";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const BlocksComponent = ({ blockList, blocks }) => {
  useEffect(() => {
    blocks();
  }, []);

  return (
    <BlocksBox>
      <div>Latest Blocks</div>
      {blockList.map((item, index) => (
        <BlockInfo key={`BlockInfo-${index}`}>
          <div key={`firstInfo-${index}`}>
            <img
              src="https://media.giphy.com/media/S8m5Nt6Yb2wMWd6Xmt/giphy.gif"
              alt=""
              key={`firstInfoImg-${index}`}
            />
          </div>
          <div key={`secondInfo-${index}`}>
            <div key={`secondInfoItem1-${index}`}>
              <span key={`secondInfo-Number-${index}`}>
                <Link to={`/blocks/${item.number}`}>{item.number}</Link>
              </span>
            </div>
            <div key={`secondInfoItem2-${index}`}>
              {new Date(item.time * 1000).toLocaleString()}
            </div>
          </div>
          <div key={`thirdInfo-${index}`}>
            <div key={`thirdInfoItem1-${index}`}>
              Fee Recipient :{" "}
              <span key={`thirdInfo-hash-${index}`}>
                <Link to={`/address/${item.miner}`}>{item.miner}</Link>
              </span>
            </div>
            <div key={`thirdInfoItem2-${index}`}>
              <span key={`thirdInfo-txns-${index}`}>
                <Link to={`/txs?number=${item.number}`}>{item.txs} txns</Link>
              </span>
            </div>
          </div>
          <div key={`lastInfo-${index}`}>{item.size} bytes</div>
        </BlockInfo>
      ))}

      <div>
        <Link to={"/blocks"}>VIEW ALL BLOCKS</Link>
      </div>
    </BlocksBox>
  );
};
export default BlocksComponent;

const BlocksBox = styled.div`
  & > div:first-child {
    padding: 0 0 10px 10px;
    font-weight: 750;
  }
`;

const BlockInfo = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div:first-child {
    width: 8%;
    & > img {
      width: 100%;
    }
  }
  & > div:nth-child(2) {
    width: 25%;
  }
  & > div:nth-child(3) {
    width: 50%;
    & > div {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
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
