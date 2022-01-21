import React from "react";
import style from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={style["wrapper-example"]}>
      <div className={style.logo}>
        <img src="/logo.png" alt="logo" />
      </div>
      <nav>
        <ul className={style.menu_list}>
          <li>About</li>
          <li>Content</li>
          <li>Help</li>
        </ul>
      </nav>
      <h1>Header</h1>
    </header>
  );
};

export default Header;
