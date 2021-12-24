import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Form from "./Form";
import ProductCounter from "./ProductCounter";

const App = () => {
  const [orangeCount, setOrangeCount] = useState(0);
  const [appleCount, setAppleCount] = useState(0);
  return (
    <div className="App">
      <Title primary={false}>TITLE</Title>
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
      <Form />
    </div>
  );
};

export default App;
const Title = styled("h1")`
  font-size: 1.5em;
  text-align: center;
  color: ${(props: { primary: boolean }) =>
    props.primary ? "black" : "palevioletred"};
`;
