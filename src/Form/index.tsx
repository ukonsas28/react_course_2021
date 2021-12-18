import React from "react";
import Input from "./Input";

const Form: React.FC = () => {
  const handler = () => {
    console.log("НЕОБХОДИМЫЙ ОБЪЕКТ");
  };
  return (
    <div>
      <Input />
      <Input />
      <button onClick={handler} type="button">
        sub
      </button>
    </div>
  );
};

export default Form;
