import React from "react";

import Counter from "./Counter";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
    };
  }

  findCounter = id => this.state.counters.find(counter => counter.id === id);

  incrementCounter = id => {
    this.updateCounter(id, value => value + 1);
  };

  decrementCounter = id => {
    this.updateCounter(id, value => value - 1);
  };

  updateCounter(id, updateValue) {
    let updatedCounters = this.state.counters.map(counter => {
      // Find the item with the matching id
      if (counter.id === id) {
        // Return a new object with the updated counter
        return {
          ...counter, // copy the existing counter
          value: updateValue(counter.value)
        };
      }

      // Leave every other counters unchanged
      return counter;
    });

    this.setState({ counters: updatedCounters });
  }

  render() {
    return (
      <div>
        <h1>Example 7: setState for array of objects</h1>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            incrementCounter={this.incrementCounter}
            decrementCounter={this.decrementCounter}
          />
        ))}
      </div>
    );
  }
}

export default App;
