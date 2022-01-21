import React, { useEffect } from "react";
import MainPage from "../MainPage";

const App = () => {
  useEffect(() => {
    console.log("app mount");
  }, []);
  return <MainPage />;
};

export default App;
