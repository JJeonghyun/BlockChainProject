import { useEffect, useState } from "react";
import styled from "styled-components";

const TotalTxsComponent = ({ txList, totalTxs }) => {
  useEffect(() => {
    totalTxs();
  }, []);
  return (
    <TxsBox>
      <div>Transactions</div>
      <div>
        {txList?.map((item, index) => (
          <>
            <div>TxHash : {item.hash}</div>
            <div>BlockHeight : {item.Block.number}</div>
            <div>Time : {item.Block.time}</div>
            <div>From : {item.from}</div>
            <div>To : {item.to}</div>
            <div>value : {item.value}</div>
          </>
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
  }
`;
