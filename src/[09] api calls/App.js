import React from "react";
import axios from "axios";

import Header from "./Header";
import Form from "./Form";
import ToDoList from "./ToDoList";
import TreeStructure from "./TreeStructure";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.url = "https://nitwit-api.azurewebsites.net/todos";
    this.state = { isLoaded: false, todos: [] };
  }

  componentDidMount = () => {
    this.getToDos();
  };

  getToDos = () => {
    axios
      .get(this.url)
      .then(res => {
        const todos = res.data;
        this.setState({ isLoaded: true, todos });
      })
      .catch(error => {
        this.setState({ isLoaded: true, error });
      });
  };

  addToDo = description => {
    const previousTodos = this.state.todos;
    const newToDo = { description: description };
    axios
      .post(this.url, newToDo)
      .then(res => {
        this.setState(prevState => ({
          todos: [newToDo, ...prevState.todos]
        }));
      })
      .catch(error => {
        this.setState({ todos: previousTodos, error });
      });
  };

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    } else if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Header />
          <Form addToDo={this.addToDo} />
          <ToDoList todos={this.state.todos} />
          <TreeStructure />
        </div>
      );
    }
  }
}

export default App;
