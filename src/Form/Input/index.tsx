import React, { useState } from "react";

const Input: React.FC = () => {
  const [value, setValue] = useState("Пустой инпут");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ fontSize: "24px" }}>
      <span>{`VALUE = ${value} : `}</span>
      <input
        onChange={changeHandler}
        style={{ fontSize: "24px", marginBottom: "20px" }}
        value={value}
      />
    </div>
  );
};

export default Input;
