import React, { useState } from "react";
import "./App.css";
import ProductCounter from "./ProductCounter";

const App = () => {
  const [orangeCount, setOrangeCount] = useState(0);
  const [appleCount, setAppleCount] = useState(0);
  return (
    <div className="App">
      <ProductCounter
        productName="Апельсин"
        count={orangeCount}
        setCount={setOrangeCount}
      />
      <ProductCounter
        productName="Яблоко"
        count={appleCount}
        setCount={setAppleCount}
      />
      <ProductCounter
        productName="Апельсин"
        count={orangeCount}
        setCount={setOrangeCount}
      />
    </div>
  );
};

export default App;
