import styled from "styled-components";

const SearchComponent = ({ inputData, setInput, checkInput, render }) => {
  return (
    <SearchBox>
      <div>
        <div>The Ethereum BlockChain Explorer</div>
        <div>
          <input
            type="text"
            value={inputData}
            onInput={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Search by Addr / Tx hash / Block  "
          />
          <button
            onClick={() => {
              checkInput(inputData);
              setInput("");
            }}
          >
            <img
              src="https://media.giphy.com/media/wp2rA9gXbKXo0KzTjD/giphy.gif"
              alt=""
            />
          </button>
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
    width: 100%;
    padding: 10px 5px;
    border-radius: 10px;
  }

  & > div {
    width: 75%;
    margin: 0 auto;
    & > div {
      padding: 10px;
    }
    & > div:nth-child(2) {
      width: 60%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: rgba(255, 255, 255, 1);
      border-radius: 10px;
      & > button {
        width: 45px;
        cursor: pointer;
        border: none;
        margin: 0 0 0 10px;
        & > img {
          width: 100%;
        }
        &:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
`;
