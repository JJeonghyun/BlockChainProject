import "./App.css";

import HeaderContainer from "./components/Header/Container";
import SearchContainer from "./components/Search/Container";
import MainInfo from "./components/MainInfo";
import TotalTxsContainer from "./components/TotalTxs/Container";
import FooterContainer from "./components/Footer/Container";

// import TestContainer from "./components/Test/Container";

function App() {
  return (
    <>
      <HeaderContainer />
      <SearchContainer />
      {/* <MainInfo /> */}
      <TotalTxsContainer />
      {/* <TestContainer /> */}
      <FooterContainer />
    </>
  );
}

export default App;
