import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import NotFoundComponent from "./Component";

const NotFoundContainer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [notFount, setFound] = useState("");

  console.log(decodeURIComponent(location.pathname.replace("/", "")));

  const notFountFunc = () => {
    setFound(decodeURIComponent(location.pathname.replace("/", "")));
  };

  const moveToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    notFountFunc();
  }, []);
  useEffect(() => {
    notFountFunc();
  }, [location]);

  return <NotFoundComponent notFount={notFount} moveToHome={moveToHome} />;
};

export default NotFoundContainer;
