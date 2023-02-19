import FooterComponent from "./Component";

const FooterContainer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return <FooterComponent scrollTop={scrollTop} />;
};
export default FooterContainer;
