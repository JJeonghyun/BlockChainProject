import { useEffect } from "react";

const TestComponent = ({ sendTx, accountsInfo }) => {
  useEffect(() => {
    sendTx();
  }, []);
  return <div>gdgd</div>;
};
export default TestComponent;
