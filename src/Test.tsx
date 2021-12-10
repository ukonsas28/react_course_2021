/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import "./App.css";

const Test = function (props: any) {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);
  console.log("children update");

  const handler = () => {
    props.handler();
    setState((prev) => prev + props.test);
    setState2(1);
  };
  return (
    <div onClick={handler} className="App">
      {state}STATE
    </div>
  );
};

export default Test;
