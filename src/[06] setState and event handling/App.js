import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Set initial state explicitely.
    this.state = {
      counter: 0,
      anotherValue: 42
    };
  }

  incrementCounter = () => {
    // Increment counter by setting state implicitely with setState.
    // However, note that the entire state is replaced.
    // const newCounterValue = this.state.counter + 1;
    // this.setState({ counter: newCounterValue });

    // Alternative, using a function that returns the updated state:
    this.setState(state => {
      return { counter: this.state.counter + 1 };
    });
  };

  decrementCounter = () => {
    // Decrement counter by setting state implicitely with setState.
    // However, note that the entire state is replaced.
    const newCounterValue = this.state.counter - 1;
    this.setState({ counter: newCounterValue });
  };

  render() {
    return (
      <div>
        <h1>Example 6: setState and event handling</h1>

        <div className="stack-horizontally">
          <button onClick={this.decrementCounter}> - </button>
          <h3>{this.state.counter}</h3>
          <button onClick={this.incrementCounter}> + </button>
        </div>
      </div>
    );
  }
}

export default App;
