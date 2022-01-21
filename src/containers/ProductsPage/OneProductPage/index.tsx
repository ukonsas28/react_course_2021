import React from "react";
import { useLocation, useParams } from "react-router-dom";

const OneProductPage: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  return <h1>ONE PRODUCT {id}</h1>;
};

export default OneProductPage;
