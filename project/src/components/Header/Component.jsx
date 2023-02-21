import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <HeaderBox>
      <div>
        <img src="./imgs/ethereum.jpg" alt="" />
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
    width: 10%;
    img {
      width: 100%;
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
    }
  }
`;
