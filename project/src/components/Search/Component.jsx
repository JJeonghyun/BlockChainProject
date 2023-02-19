import styled from "styled-components";

const SearchComponent = () => {
  return (
    <SearchBox>
      <div>
        <div>The Ethereum BlockChain Explorer</div>
        <div>
          <input
            type="text"
            placeholder="Search by Addr / Tx hash / Block / Token / Domain Name "
          />
        </div>
        <div>Sponsored : Jang Jeong Hyun</div>
      </div>
    </SearchBox>
  );
};
export default SearchComponent;

const SearchBox = styled.div`
  width: 100%;
  background-color: rgba(17, 25, 57, 1);
  padding: 3% 0;
  color: white;
  font-size: 1.2rem;

  input {
    color: black;
    width: 55%;
    padding: 10px 5px;
    border-radius: 10px;
  }

  & > div {
    width: 75%;
    margin: 0 auto;
    & > div {
      padding: 10px 0;
    }
  }
`;
