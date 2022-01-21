import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import style from "./PageWrapper.module.scss";

type PageWrapperPropTypes = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperPropTypes> = (props) => {
  const { children } = props;
  return (
    <div className={style.page_wrapper}>
      <Header />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
