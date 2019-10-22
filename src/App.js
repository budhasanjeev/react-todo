import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "What is React JS?",
        completed: true
      },
      {
        id: 2,
        title: "Why React JS",
        completed: true
      },
      {
        id: 3,
        title: "React JS Installation",
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id===id) todo.completed = !todo.completed;

      return todo;
    })});
  }

  // remove todo
  removeTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter((todo) => todo.id!==id)]})
  }

  render () {
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete} removeTodo={this.removeTodo} />
      </div>
    );
  }
 
}

export default App;
