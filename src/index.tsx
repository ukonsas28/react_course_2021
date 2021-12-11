import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// const element = <h1 className="test">Hello World</h1>;

// const elementTwo = React.createElement(
//   "h1",
//   { className: "test" },
//   "Привет МИР"
// );

// ReactDOM.render(elementTwo, document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
