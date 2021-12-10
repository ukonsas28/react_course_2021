/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";

const App = function () {
  const [state, setState] = useState(0);
  const handler = () => {
    setState((prev) => prev + 1);
    setState((prev) => prev + 1);
    setState((prev) => prev + 1);
    setState((prev) => prev + 1);
  };
  console.log("parent update");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={handler}>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          {state}
        </a>
        <Test test={1} handler={handler} />
      </header>
    </div>
  );
};

export default App;
