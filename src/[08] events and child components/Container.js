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
    this.updateCounter(id, value => value + 1);
  };

  decrementCounter = id => {
    this.updateCounter(id, value => value - 1);
  };

  updateCounter(id, updateValue) {
    let updatedCounters = this.state.counters.map(counter => {
      if (counter.id === id) {
        return { ...counter, value: updateValue(counter.value) };
      }
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
