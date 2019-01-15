import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Example 4</h1>
        Hello {this.props.name}
      </div>
    );
  }
}

export default App;
