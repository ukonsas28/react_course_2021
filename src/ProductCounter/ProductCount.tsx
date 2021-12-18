import React from "react";

type ProductCountType = {
  count?: number;
};

const ProductCount: React.FC<ProductCountType> = (props) => {
  const { count = 0 } = props;
  console.log("render ProductCount");
  return <span>{count}</span>;
};
export default ProductCount;
