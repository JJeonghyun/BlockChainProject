import "./App.css";
import { Routes, Route } from "react-router-dom";

import HeaderContainer from "./components/Header/Container";
import SearchContainer from "./components/Search/Container";
import MainInfo from "./components/MainInfo";
import TotalTxsContainer from "./components/TotalTxs/Container";
import TotalBlocksContainer from "./components/TotalBlocks/Container";
import DetailBlockContainser from "./components/DetailBlock/Container";
import FooterContainer from "./components/Footer/Container";

// import TestContainer from "./components/Test/Container";

function App() {
  return (
    <>
      <HeaderContainer />
      <SearchContainer />
      {/* <Routes>
        <Route path="/" element={<MainInfo />} />
        <Route path="/blocks" element={<TotalBlocksContainer />} />
        <Route path="/txs" element={<TotalTxsContainer />} />
      </Routes> */}
      <DetailBlockContainser />
      <FooterContainer />
    </>
  );
}

export default App;
