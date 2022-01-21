import React from "react";
import { NavLink, Link } from "react-router-dom";
import style from "./Header.module.scss";

const Header: React.FC = () => {
  console.log("render header");
  return (
    <header className={style["wrapper-example"]}>
      <div className={style.logo}>
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>
      </div>
      <nav>
        <ul className={style.menu_list}>
          <li>
            <NavLink to="/registration">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Content</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
      <Link to="/registration">
        <button type="button" className={style.btn}>
          <span>SIGN UP</span>
        </button>
      </Link>
    </header>
  );
};

export default Header;
