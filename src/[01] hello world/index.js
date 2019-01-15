import React from "react";
import ReactDOM from "react-dom";

function Welcome() {
  return <div>Example 1: Hello World!</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Welcome />, rootElement);
