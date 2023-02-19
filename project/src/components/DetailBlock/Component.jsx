import styled from "styled-components";

const DetailBlockComponent = ({ moveDetail }) => {
  return (
    <DetailBlockBox>
      <div>Blocks</div>
      <div>
        <div>
          <div value={"Block Height"} onClick={moveDetail}>
            Block Height
          </div>
          <div>Timestamp</div>
          <div>Transactions</div>
          <div>difficulty</div>
          <div>size</div>
          <div>Gas Used</div>
          <div>Gas Limit</div>
        </div>
        <div>
          <div>Block Height</div>
          <div>Timestamp</div>
          <div>Transactions</div>
          <div>difficulty</div>
          <div>size</div>
          <div>Gas Used</div>
          <div>Gas Limit</div>
        </div>
      </div>
    </DetailBlockBox>
  );
};
export default DetailBlockComponent;

const DetailBlockBox = styled.div`
  width: 75%;
  margin: 0 auto;
  & > div:first-child {
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid black;
  }

  & > div:last-child {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    & > div:first-child {
      width: 24%;
      & > div {
        padding: 10px 0;
      }
    }
    & > div:last-child {
      width: 74%;
      & > div {
        padding: 10px 0;
      }
    }
  }
`;
