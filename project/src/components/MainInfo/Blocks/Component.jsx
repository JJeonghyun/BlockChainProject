import styled from "styled-components";
import { useEffect } from "react";

const BlocksComponent = ({ blockList, blocks }) => {
  useEffect(() => {
    blocks();
  }, []);
  // const [tempInfo, setInfo] = useState([
  //   {
  //     img: "https://media.giphy.com/media/S8m5Nt6Yb2wMWd6Xmt/giphy.gif",
  //     height: 12,
  //     timestamps: 7,
  //     recipient: "jang",
  //     txsLength: 123,
  //     ETH: 0.12312312,
  //   },
  //   {
  //     img: "https://media.giphy.com/media/S8m5Nt6Yb2wMWd6Xmt/giphy.gif",
  //     height: 123,
  //     timestamps: 27,
  //     recipient: "jeong",
  //     txsLength: 233,
  //     ETH: 0.0123123,
  //   },
  //   {
  //     img: "https://media.giphy.com/media/S8m5Nt6Yb2wMWd6Xmt/giphy.gif",
  //     height: 1234,
  //     timestamps: 35,
  //     recipient: "hyun",
  //     txsLength: 332,
  //     ETH: 0.123,
  //   },
  //   {
  //     img: "https://media.giphy.com/media/S8m5Nt6Yb2wMWd6Xmt/giphy.gif",
  //     height: 12345,
  //     timestamps: 100,
  //     recipient: "asd",
  //     txsLength: 455,
  //     ETH: 2.3,
  //   },
  //   {
  //     img: "https://media.giphy.com/media/S8m5Nt6Yb2wMWd6Xmt/giphy.gif",
  //     height: 123456,
  //     timestamps: 123,
  //     recipient: "asdasd",
  //     txsLength: 1235,
  //     ETH: 0.1231255666,
  //   },
  //   {
  //     img: "https://media.giphy.com/media/S8m5Nt6Yb2wMWd6Xmt/giphy.gif",
  //     height: 0,
  //     timestamps: 1233,
  //     recipient: "qweqwe",
  //     txsLength: 123,
  //     ETH: 0.123123123,
  //   },
  // ]);
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
            <div key={`secondInfoItem1-${index}`}>{item.number}</div>
            <div key={`secondInfoItem2-${index}`}>
              {new Date(item.time).getSeconds()} secs ago
            </div>
          </div>
          <div key={`thirdInfo-${index}`}>
            <div key={`thirdInfoItem1-${index}`}>
              Fee Recipient : {item.hash}
            </div>
            <div key={`thirdInfoItem2-${index}`}>{item.size} txns</div>
          </div>
          <div key={`lastInfo-${index}`}>
            {parseInt(parseInt(item.nonce, 16) / Math.pow(10, 17))} Eth
          </div>
        </BlockInfo>
      ))}

      <div>VIEW ALL BLOCKS</div>
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
    width: 20%;
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
    width: 20%;
  }
`;
