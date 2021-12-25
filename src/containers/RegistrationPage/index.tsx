import React from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Registration from "../../components/Registration";

const RegistrationPage = () => {
  return (
    <div className="page_wrapper">
      <Header />
      <main className="main">
        <Registration />
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
