import React from "react";

import Header from "./Header";
import Form from "./Form";
import Registrations from "./Registrations";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { registrations: [] };
  }

  register = name => {
    this.setState(state => {
      const registrations = [...state.registrations, state.value];

      return {
        list,
        value: ""
      };
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Form register={this.register} />
        <Registrations registrations={this.state.registrations} />
      </div>
    );
  }
}

export default App;
