import React from "react";

class Counter extends React.Component {
  handleMinusClick = () => {
    this.props.decrementCounter(this.props.counter.id);
  };

  handlePlusClick = () => {
    this.props.incrementCounter(this.props.counter.id);
  };

  render() {
    return (
      <div className="stack-horizontally">
        <button onClick={this.handleMinusClick}> - </button>
        <h3>{this.props.counter.value}</h3>
        <button onClick={this.handlePlusClick}> + </button>
      </div>
    );
  }
}

export default Counter;
