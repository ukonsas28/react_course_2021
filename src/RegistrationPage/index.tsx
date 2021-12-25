import React from "react";
import Footer from "../Footer";
import Form from "../Form";
import Header from "../Header";

const RegistrationPage: React.FC = () => {
  return (
    <div className="page_wrapper">
      <Header />
      <main className="main">
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
