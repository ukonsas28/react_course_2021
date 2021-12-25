import React from "react";

type FruitCartPropsType = {
  name: string;
  cost: number;
};

const FruitCart: React.FC<FruitCartPropsType> = (props) => {
  const { name, cost } = props;
  return (
    <div>
      <h1>{name}</h1>
      <span>{cost}</span>
    </div>
  );
};

export default FruitCart;
