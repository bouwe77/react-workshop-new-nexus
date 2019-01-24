import React from "react";

import Counters from "./Counters";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
    };
  }

  findCounter = id => this.state.counters.find(counter => counter.id === id);

  incrementCounter = id => {
    this.updateCounters(id, value => value + 1);
  };

  decrementCounter = id => {
    this.updateCounters(id, value => value - 1);
  };

  updateCounters(id, updateValue) {
    var updatedCounters = this.state.counters.map(counter => {
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
        <Counters
          counters={this.state.counters}
          incrementCounter={this.incrementCounter}
          decrementCounter={this.decrementCounter}
        />
      </div>
    );
  }
}

export default Container;
