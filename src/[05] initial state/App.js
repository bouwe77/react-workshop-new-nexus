import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  render() {
    return (
      <div>
        <h1>Example 5</h1>
        Current time: {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default App;
