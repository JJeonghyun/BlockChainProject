import { useState } from "react";
import styled from "styled-components";

const TxsComponent = () => {
  const [tempInfo, setInfo] = useState([
    {
      img: "https://media.giphy.com/media/RH7HREzgpzUuWMeFJu/giphy.gif",
      hash: "0xb2f9982e5581b83f12ee73d7ca8a645abc91e6beb17b3ee38dc8dd85e011d912",
      timestamps: 7,
      from: "jang",
      to: 123,
      ETH: 0.12312312,
    },
    {
      img: "https://media.giphy.com/media/RH7HREzgpzUuWMeFJu/giphy.gif",
      hash: "0xb2f9982e5581b83f12ee73d7ca8a645abc91e6beb17b3ee38dc8dd85e011d912",
      timestamps: 7,
      from: "jang",
      to: 123,
      ETH: 0.12312312,
    },
    {
      img: "https://media.giphy.com/media/RH7HREzgpzUuWMeFJu/giphy.gif",
      hash: "0xb2f9982e5581b83f12ee73d7ca8a645abc91e6beb17b3ee38dc8dd85e011d912",
      timestamps: 7,
      from: "jang",
      to: 123,
      ETH: 0.12312312,
    },
    {
      img: "https://media.giphy.com/media/RH7HREzgpzUuWMeFJu/giphy.gif",
      hash: "0xb2f9982e5581b83f12ee73d7ca8a645abc91e6beb17b3ee38dc8dd85e011d912",
      timestamps: 7,
      from: "jang",
      to: 123,
      ETH: 0.12312312,
    },
    {
      img: "https://media.giphy.com/media/RH7HREzgpzUuWMeFJu/giphy.gif",
      hash: "0xb2f9982e5581b83f12ee73d7ca8a645abc91e6beb17b3ee38dc8dd85e011d912",
      timestamps: 7,
      from: "jang",
      to: 123,
      ETH: 0.12312312,
    },
    {
      img: "https://media.giphy.com/media/RH7HREzgpzUuWMeFJu/giphy.gif",
      hash: "0xb2f9982e5581b83f12ee73d7ca8a645abc91e6beb17b3ee38dc8dd85e011d912",
      timestamps: 7,
      from: "jang",
      to: 123,
      ETH: 0.12312312,
    },
  ]);
  return (
    <TxsBox>
      <div>Latest Transactions</div>
      {tempInfo.map((item, index) => (
        <TxsInfo key={`TxsInfo-${index}`}>
          <div key={`firstInfo-${index}`}>
            <img src={item.img} alt="" key={`firstInfoImg-${index}`} />
          </div>
          <div key={`secondInfo-${index}`}>
            <div key={`secondInfoItem1-${index}`}>{item.hash}</div>
            <div key={`secondInfoItem2-${index}`}>
              {item.timestamps} secs ago
            </div>
          </div>
          <div key={`thirdInfo-${index}`}>
            <div key={`thirdInfoItem1-${index}`}>From : {item.from}</div>
            <div key={`thirdInfoItem2-${index}`}>To : {item.to}</div>
          </div>
          <div key={`lastInfo-${index}`}>{item.ETH} Eth</div>
        </TxsInfo>
      ))}
      <div>VIEW ALL Txs</div>
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
  & > div:first-child {
    width: 8%;
    & > img {
      width: 100%;
    }
  }
  & > div:nth-child(2) {
    width: 25%;
    & > div:first-child {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  & > div:nth-child(3) {
    width: 40%;
  }
  & > div:last-child {
    width: 20%;
  }
`;
