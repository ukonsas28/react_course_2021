import React from "react";
import "./App.css";
import ProductCounter from "./ProductCounter";

const App = () => {
  return (
    <div className="App">
      <ProductCounter product={{ productName: "Апельсин", count: 6 }} />
      <ProductCounter product={{ productName: "Яблоко" }} />
      <ProductCounter product={{ productName: "Ананас", count: 3 }} />
      <ProductCounter product={{ productName: "Арбуз", count: 46 }} />
      <ProductCounter product={{ productName: "Дыня" }} />
    </div>
  );
};

export default App;
