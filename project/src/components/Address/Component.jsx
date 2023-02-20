import { useEffect } from "react";
import styled from "styled-components";

const AddressComponent = ({
  addressInfo,
  addInfo,
  info,
  getBalance,
  balance,
}) => {
  useEffect(() => {
    addressInfo();
    getBalance();
  }, []);
  return (
    <AddressBox>
      <div>
        <div>Address</div>
        <div>{info}</div>
      </div>
      <div>
        <div>
          <div>Overview</div>
          <div>
            <div>ETH BALANCE</div>
            <div>{parseInt(balance / Math.pow(10, 18))} ETH</div>
          </div>
          <div>ETH VALUE</div>
          <div>TOKEN HOLDINGS</div>
        </div>
        <div>
          <div>More Info</div>
          <div>PRIVATE NAME TAGS</div>
          <div>LAST TXN SENT</div>
          <div>FIRST TXN SENT</div>
        </div>
      </div>
      <div>
        <div>
          <div>TxHash</div>
          <div>Height</div>
          <div>Time</div>
          <div>From</div>
          <div>To</div>
          <div>value</div>
        </div>
        {addInfo.map((item, index) => (
          <div key={`addInfo-box-${index}`}>
            <div key={`addInfo-hash-${index}`}>{item.hash}</div>
            <div key={`addInfo-blockNumber-${index}`}>{item.blockNumber}</div>
            <div key={`addInfo-time-${index}`}>{item.Block.time}</div>
            <div key={`addInfo-from-${index}`}>{item.from}</div>
            <div key={`addInfo-to-${index}`}>{item.to}</div>
            <div key={`addInfo-value-${index}`}>
              {parseInt(item.value / Math.pow(10, 18))} ETH
            </div>
          </div>
        ))}
      </div>
    </AddressBox>
  );
};
export default AddressComponent;

const AddressBox = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 10px 0 0 0;

  & > div:first-child {
    display: flex;
    width: 100%;
    padding: 10px 0;
    & > div:first-child {
      font-weight: 850;
      padding: 0 10px 0 0;
    }
    & > div:last-child {
      width: fit-content;
    }
  }

  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    & > div {
      width: 49%;
      border: 1px solid black;
      border-radius: 10px;
      box-shadow: 2px 2px 2px 2px gray;
      & > div {
        padding: 2% 0;
      }
    }
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
