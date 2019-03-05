import React from "react";
import uuidv4 from "uuid/v4";
import Thingy from "./Thingy";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: 0,
      thingies: [{ id: uuidv4(), name: "bla" }]
    };
  }

  addThingy = () => {
    const newThingy = { id: uuidv4(), name: "" };
    const thingies = [...this.state.thingies, newThingy];
    this.setState({
      thingies: thingies
    });
  };

  updateThingy = (id, name) => {
    const thingies = this.state.thingies.map(thingy => {
      if (thingy.id === id) {
        return {
          ...thingy,
          name
        };
      }
      return thingy;
    });
    this.setState({ thingies });
  };

  removeThingy = id => {
    const thingies = this.state.thingies.filter(thingy => thingy.id !== id);
    this.setState({ thingies });
  };

  selectThingy = id => {
    this.setState({ selectedId: id });
  };

  render() {
    return (
      <div>
        <h1>Example 7: setState for array of objects</h1>
        {this.state.selectedId}
        <br />
        <br />
        <button onClick={this.addThingy}>+</button>
        <br />
        {this.state.thingies.map(thingy => (
          <Thingy
            key={thingy.id}
            thingy={thingy}
            selectThingy={this.selectThingy}
            addThingy={this.addThingy}
            updateThingy={this.updateThingy}
            removeThingy={this.removeThingy}
          />
        ))}
      </div>
    );
  }
}

export default App;
