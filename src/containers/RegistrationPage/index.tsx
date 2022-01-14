import React, { useEffect } from "react";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Registration from "../../components/Registration";

const RegistrationPage = () => {
  useEffect(() => {
    console.log("mount container");
  }, []);
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
