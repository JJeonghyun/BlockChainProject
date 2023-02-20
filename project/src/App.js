import "./App.css";
import { Routes, Route } from "react-router-dom";

import HeaderContainer from "./components/Header/Container";
import SearchContainer from "./components/Search/Container";
import MainInfo from "./components/MainInfo";
import TotalTxsContainer from "./components/TotalTxs/Container";
import TotalBlocksContainer from "./components/TotalBlocks/Container";
import DetailBlockContainer from "./components/DetailBlock/Container";
import DetailTxContainer from "./components/DetailTx/Container";
import AddressContainer from "./components/Address/Container";
import FooterContainer from "./components/Footer/Container";

function App() {
  return (
    <>
      <HeaderContainer />
      <SearchContainer />
      <Routes>
        <Route path="/" element={<MainInfo />} />
        <Route path="/blocks" element={<TotalBlocksContainer />} />
        <Route path="/blocks/:blockInfo" element={<DetailBlockContainer />} />
        <Route path="/txs" element={<TotalTxsContainer />} />
        <Route path="/txs/:txInfo" element={<DetailTxContainer />} />
        <Route path="/address/:addressInfo" element={<AddressContainer />} />
      </Routes>
      <FooterContainer />
    </>
  );
}

export default App;
