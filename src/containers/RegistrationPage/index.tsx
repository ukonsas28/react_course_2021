import React from "react";
import { Link, Outlet } from "react-router-dom";

const RegistrationPage: React.FC = () => {
  return (
    <div>
      <Link to="form">FORM</Link>
      <br />
      <Link to="info">info</Link>
      <Outlet />
    </div>
  );
};

export default RegistrationPage;
