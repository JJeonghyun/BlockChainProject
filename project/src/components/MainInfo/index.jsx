import styled from "styled-components";

import BlocksContainer from "./Blocks/Container";
import TxsContainer from "./Transactions/Container";

const MainInfo = () => {
  return (
    <MainInfoBox>
      <BlocksContainer />
      <TxsContainer />
    </MainInfoBox>
  );
};
export default MainInfo;

const MainInfoBox = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  & > div {
    width: 49%;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 0 0 0;
    box-shadow: 2px 2px 2px 2px gray;
    overflow: hidden;
    & > div {
      border-bottom: 1px solid gray;
    }
    & > div:last-child {
      width: 100%;
      border: none;
      text-align: center;
      padding: 15px 0;
      background-color: rgba(200, 200, 200, 1);
      &: hover {
        cursor: pointer;
        color: blue;
      }
    }
  }
`;
