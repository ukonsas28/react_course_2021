import React from "react";
import style from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={style["wrapper-example"]}>
      <h1>Header</h1>
    </header>
  );
};

export default Header;
