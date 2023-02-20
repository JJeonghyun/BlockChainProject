import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

import AddressComponent from "./Component";

const AddressContainer = () => {
  const [addInfo, setAddress] = useState([]);
  const [balance, setBalance] = useState(0);
  const params = useParams();

  const addressInfo = () => {
    axios
      .post("http://localhost:8083/api/address/info", {
        address: params.addressInfo,
      })
      .then((data) => {
        setAddress(data.data.addrList);
      })
      .catch((err) => console.log(err));
  };

  const getBalance = () => {
    axios
      .post("http://localhost:8083/api/address/balance", {
        address: params.addressInfo,
      })
      .then((data) => {
        console.log(data);
        setBalance(data.data.balance);
      });
  };

  return (
    <AddressComponent
      addressInfo={addressInfo}
      addInfo={addInfo}
      info={params.addressInfo}
      getBalance={getBalance}
      balance={balance}
    />
  );
};
export default AddressContainer;
