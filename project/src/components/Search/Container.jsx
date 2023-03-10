import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchComponent from "./Component";

const SearchContainer = () => {
  const [inputData, setInput] = useState("");
  const navigate = useNavigate();

  const checkInput = (_input) => {
    if (_input.length == 66 && _input.includes("0x"))
      navigate(`/txs/${_input}`);
    else if (_input.length == 42 && _input.includes("0x"))
      navigate(`/address/${_input}`);
    else if (/[0-9]/g.test(_input)) {
      if (_input.length < 42) navigate(`/blocks/${_input}`);
    } else navigate(`/${_input}`);
  };

  return (
    <SearchComponent
      inputData={inputData}
      setInput={setInput}
      checkInput={checkInput}
    />
  );
};
export default SearchContainer;
