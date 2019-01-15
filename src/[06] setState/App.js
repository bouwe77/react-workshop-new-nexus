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
        <h1>Example 6</h1>
        Current time: {this.state.date.toLocaleTimeString()}
        <h2>TODO Hier met een timeout elke seconde een setState doen...</h2>
      </div>
    );
  }
}

export default App;
