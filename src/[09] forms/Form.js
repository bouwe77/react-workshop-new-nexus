import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitForm = event => {
    event.preventDefault();
    this.props.register(this.state.name);
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        Name
        <input
          type="text"
          value={this.state.name}
          name="name"
          onChange={this.onChange}
        />
        <br />
        <button type="submit">OK</button>
      </form>
    );
  }
}

export default Form;
