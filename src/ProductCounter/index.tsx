import React from "react";
import ProductCount from "./ProductCount";
import style from "./style.module.scss";

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
      <button onClick={addHandler} type="button" className={style.test_style}>
        Добавить
      </button>
      <button
        onClick={deleteHandler}
        type="button"
        className={style.test_style_second}>
        Убавить
      </button>
    </div>
  );
};

export default ProductCounter;
