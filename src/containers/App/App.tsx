import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../MainPage";
import RegistrationPage from "../RegistrationPage";
import PageWrapper from "../../components/common/PageWrapper";
import ProductsPage from "../ProductsPage";
import OneProductPage from "../ProductsPage/OneProductPage";
import Registration from "../../components/Registration";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path="/" element={<MainPage />} />
        <Route path="registration/*" element={<RegistrationPage />}>
          <Route path="form" element={<Registration />} />
          <Route path="info" element={<div>INFO</div>} />
        </Route>
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<OneProductPage />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
};

export default App;
