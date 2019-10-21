import React from 'react';
import Todos from './components/Todos';

import './App.css';

function App() {

  state = {
    todos: [
      {
        id: 1,
        title: "Learn React",
        completed: false
      },
      {
        id: 2,
        title: "Learn Node Js",
        completed: false
      },
      {
        id: 3,
        title: "Learn Mongo DB",
        completed: false
      }
    ]
  }
  return (
    <div className="App">
      <h1>App</h1>
      <Todos todos={this.state.todos}/>
    </div>
  );
}

export default App;
