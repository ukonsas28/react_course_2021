import React from "react";
import ProductCount from "./ProductCount";

type ProductCounterPropsType = {
  productName: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const ProductCounter: React.FC<ProductCounterPropsType> = (props) => {
  const { productName, count, setCount } = props;

  const addHandler = () => {
    setCount((prev) => prev + 1);
  };
  const deleteHandler = () => {
    setCount((prev) => prev - 1);
  };

  console.log("render ProductCounter", productName);

  return (
    <div className="product_counter">
      <h1>{productName}</h1>
      <ProductCount count={count} />
      <button onClick={addHandler} type="button">
        Добавить
      </button>
      <button onClick={deleteHandler} type="button">
        Убавить
      </button>
    </div>
  );
};

export default ProductCounter;
