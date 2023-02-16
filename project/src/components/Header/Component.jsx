import styled from "styled-components";

const HeaderComponent = () => {
  return (
    <HeaderBox>
      <div>
        <img src="./imgs/ethereum.jpg" alt="" />
      </div>
      <div>
        <div>Home</div>
        <div>BlockChain</div>
        <div>Tokens</div>
        <div>NFTs</div>
        <div>Resources</div>
        <div>Developers</div>
        <div>More</div>
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
    width: 50%;
  }
`;
