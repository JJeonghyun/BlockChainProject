import styled from "styled-components";

const NotFoundComponent = ({ notFount, moveToHome }) => {
  return (
    <NotFoundBox>
      <div>
        <img src="https://etherscan.io/images/error-404.svg" alt="" />
        <div>
          <div>Search Not Found</div>
          <div>
            {" "}
            Oops! The search string you entered was: <span>
              {notFount}
            </span>{" "}
          </div>
          <div>Sorry! This is an invalid search string.</div>
          <button
            onClick={() => {
              moveToHome();
            }}
          >
            to Home
          </button>
        </div>
      </div>
    </NotFoundBox>
  );
};

export default NotFoundComponent;

const NotFoundBox = styled.div`
  width: 100%;
  & > div {
    width: 100%;
    position: relative;
    top: 0;
    & > img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
    & > div {
      position: absolute;
      top: 15%;
      left: 10%;
      & > div:first-child {
        font-size: 2rem;
        color: rgba(7, 132, 195, 1);
      }
      & > div:nth-child(2) {
        padding: 10px 0 0 0;
        & > span {
          font-weight: 750;
        }
      }
      & > button {
        margin: 30px 0 0 0;
        padding: 10px 20px;
        background-color: rgba(7, 132, 195, 1);
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 1rem;
        &:hover {
          background-color: rgba(7, 132, 195, 0.7);
          cursor: pointer;
        }
      }
    }
  }
`;
