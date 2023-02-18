import TestComponent from "./Component";
import axios from "axios";
import { useState } from "react";

const TestContainer = () => {
  const [accountsInfo, setAccounts] = useState([]);

  return <TestComponent />;
};
export default TestContainer;
