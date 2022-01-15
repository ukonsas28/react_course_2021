import React from "react";
import Footer from "../Footer";
import Header from "../Header";

type PageWrapperPropTypes = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperPropTypes> = (props) => {
  const { children } = props;
  return (
    <div className="page_wrapper">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
