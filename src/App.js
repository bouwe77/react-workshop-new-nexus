import React from "react";

import Header from "./Header";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.numberOfExamples = 10;
    const initialExampleIndex = 0;
    this.state = {
      currentExampleIndex: initialExampleIndex
    };
  }

  hasNext = currentExampleIndex =>
    currentExampleIndex < this.numberOfExamples - 1;

  hasPrev = currentExampleIndex =>
    this.numberOfExamples > 0 && currentExampleIndex > 0;

  nextExample = () => {
    if (this.hasNext(this.state.currentExampleIndex)) {
      this.setState({
        currentExampleIndex: this.state.currentExampleIndex + 1
      });
    }
  };

  prevExample = () => {
    if (this.hasPrev(this.state.currentExampleIndex)) {
      this.setState({
        currentExampleIndex: this.state.currentExampleIndex - 1
      });
    }
  };

  render() {
    return (
      <div>
        <Header
          nextExample={this.nextExample}
          prevExample={this.prevExample}
          hasNext={this.hasNext(this.state.currentExampleIndex)}
          hasPrev={this.hasPrev(this.state.currentExampleIndex)}
        />
      </div>
    );
  }
}
