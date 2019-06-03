import React, { Component } from 'react';
import Todos from "./todo"
import Addtodo from "./Addtodo"


class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "play mario kart" }
    ]
  }
  deletetodo = (id) => {
    const todos = this.state.todos.filter(todos => {
      return todos.id !== id
    });
    this.setState({
      todos: todos
    })
  }
  addtodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="todo-App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todoapp={this.state.todos} deletetodo={this.deletetodo} />
        <Addtodo addtodo={this.addtodo} />
      </div>
    );
  }
}

export default App;
