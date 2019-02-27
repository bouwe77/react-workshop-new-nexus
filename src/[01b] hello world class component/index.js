import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";

class Welcome extends React.Component {
  render() {
    return <div>Example 1b: Hello World!</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Welcome />, rootElement);
