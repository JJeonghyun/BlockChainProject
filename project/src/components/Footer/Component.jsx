import styled from "styled-components";

const FooterComponent = ({ scrollTop }) => {
  return (
    <FooterBox>
      <div>
        <div>
          <div>
            <div>
              <img src="./imgs/cafeImg.png" alt="" />
            </div>
            <div>
              <img src="./imgs/facebookImg.png" alt="" />
            </div>
            <div>
              <img src="./imgs/instarImg.png" alt="" />
            </div>
            <div>
              <img src="./imgs/twitterImg.png" alt="" />
            </div>
          </div>
          <div onClick={scrollTop}>Back to Top</div>
        </div>
        <div>
          <div>
            <div>Powered by Ethereum</div>
            <div>
              Etherscan is a Block Explorer and Analytics Platform for Ethereum,
              a decentralized smart contracts platform.
            </div>
          </div>
          <div>
            <div>Company</div>
            <div>About us</div>
            <div>Brand Assets</div>
            <div>Contact Us</div>
            <div>Careers</div>
            <div>Terms of Service</div>
            <div>Bug Bounty</div>
          </div>
          <div>
            <div>Community</div>
            <div>API Documentation</div>
            <div>Knowledge Base</div>
            <div>Network Status</div>
            <div>Newsletters</div>
            <div>Disqus Comments</div>
            <div></div>
          </div>
          <div>
            <div>Products & Services</div>
            <div>Advertise</div>
            <div>Explorer-as-a-Service (EaaS)</div>
            <div>API Plans</div>
            <div>Priority Support</div>
            <div>Blockscan </div>
            <div>Blockscan Chat </div>
          </div>
        </div>
      </div>
    </FooterBox>
  );
};
export default FooterComponent;

const FooterBox = styled.div`
  width: 100%;
  background-color: rgba(200, 200, 200, 1);
  margin: 3% 0 0 0;
  & > div {
    width: 75%;
    margin: 0 auto;
    & > div:first-child {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2% 0;
      border-bottom: 1px solid gray;
      & > div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 20%;
        img {
          width: 30px;
        }
      }
      & > div:last-child {
        width: fit-content;
        &:hover {
          cursor: pointer;
          color: blue;
        }
      }
    }
    & > div:last-child {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2% 0;
      width: 100%;
      & > div {
        width: 20%;
        & > div {
          padding: 5px 0;
        }
      }
      & > div:first-child {
        width: 30%;
      }
    }
  }
`;
