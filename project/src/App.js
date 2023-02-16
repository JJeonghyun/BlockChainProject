import "./App.css";

import HeaderContainer from "./components/Header/Container";
import SearchContainer from "./components/Search/Container";
import MainInfo from "./components/MainInfo";
import FooterContainer from "./components/Footer/Container";

import TestContainer from "./components/Test/Container";

function App() {
  return (
    <>
      <HeaderContainer />
      <SearchContainer />
      <MainInfo />
      <TestContainer />
      <FooterContainer />
    </>
  );
}

export default App;
