import { useEffect } from "react";
import styled from "styled-components";

const TotalBlocksComponent = ({ blockList, totalBlocks }) => {
  useEffect(() => {
    totalBlocks();
  }, []);
  return (
    <BlocksBox>
      <div>Blocks</div>
      <div>
        <div>
          <div>Hash</div>
          <div>Height</div>
          <div>Time</div>
          <div>ParentHash</div>
          <div>Nonce</div>
        </div>
        {blockList?.map((item, index) => (
          <div key={`itemBox-blocks-${index}`}>
            <div key={`blocks-hash-${index}`}>{item.hash}</div>
            <div key={`blocks-number-${index}`}>{item.number}</div>
            <div key={`blocks-time-${index}`}>
              {new Date(item.time).getSeconds()} sec
            </div>
            <div key={`blocks-parentHash-${index}`}>{item.parentHash}</div>
            <div key={`blocks-nonce-${index}`}>{item.nonce}</div>
          </div>
        ))}
      </div>
    </BlocksBox>
  );
};
export default TotalBlocksComponent;

const BlocksBox = styled.div`
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
      & > div:nth-child(4) {
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
