import { useEffect } from "react";

const TestComponent = ({ listUp, accountsInfo }) => {
  useEffect(() => {
    listUp();
  }, []);
  return (
    <div>
      {accountsInfo.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};
export default TestComponent;
