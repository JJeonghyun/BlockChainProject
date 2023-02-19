import DetailBlockComponent from "./Component";
import { Navigate, useNavigate } from "react-router-dom";

const DetailBlockContainer = () => {
  const navigate = useNavigate();

  const moveDetail = (e) => {
    console.log(e.target.value);
    // navigate("/blocks/")
  };

  return <DetailBlockComponent moveDetail={moveDetail} />;
};
export default DetailBlockContainer;
