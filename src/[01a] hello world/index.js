import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";

function Welcome() {
  return <div>Example 1a: Hello World!</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Welcome />, rootElement);
