import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <HeaderBox>
      <div>
        <Link to={`/`}>
          <img
            src="https://media.giphy.com/media/euGd7c6SKJVwnXumWd/giphy.gif"
            alt=""
          />{" "}
          <div>Ethereum</div>
        </Link>
      </div>
      <div>
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <Link to={`/blocks`}>Blocks</Link>
        </div>
        <div>
          <Link to={`/txs`}>Transactions</Link>
        </div>
      </div>
    </HeaderBox>
  );
};
export default HeaderComponent;

const HeaderBox = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div:first-child {
    width: 8%;
    & > a {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: black;
      font-size: 1.3rem;
      img {
        width: 100%;
      }
    }
  }
  & > div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    a {
      text-decoration: none;
      color: black;
      font-size: 1.3rem;
    }
    & > div {
      padding: 10px;
      border-radius: 10px;
    }
    & > div:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;
