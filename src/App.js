import React, { Component } from 'react';

import TodoEntry from './TodoEntry';
import Todo from './Todo';

const todos = [
  {
    id: 0,
    todo: "Wash car",
  },
  {
    id: 1,
    todo: "Take out trash",
  },
  {
    id: 2,
    todo: "Make dinner",
  },
  {
    id: 3,
    todo: "Workout",
  },
  {
    id: 4,
    todo: "Meditate",
  },
  {
    id: 5,
    todo: "Trim hedges",
  },
  {
    id: 6,
    todo: "Rake leaves",
  },
];

class App extends Component {
  state = {
    todos,
    id: 7,
    todo: '',
  };

  submitTodo = (e) => {
    e.preventDefault();
    let todos = [...this.state.todos];
    let todo = this.state.todo;
    let id = this.state.id;
    todos.push({ id, todo });
    id++;
    todo = '';
    this.setState({
      todos,
      id,
      todo,
    })
  }

  deleteTodo = (e) => {
    let id = parseInt(e.target.id, 10);
    let todo = this.state.todos.filter(todo => todo.id === id)[0];
    let index = this.state.todos.indexOf(todo);
    let todos = [...this.state.todos];
    todos = todos.slice(0, index).concat(todos.slice(index + 1));
    this.setState({
      todos
    })
  }

  todoChange = (e) => {
    this.setState({
      todo: e.target.value,
    })
  }

  render = () => (
    <div>
      <TodoEntry todo={this.state.todo} submitTodo={this.submitTodo} todoChange={this.todoChange} />
      <ul>
        {this.state.todos.map(todo => <Todo key={todo.id} id={todo.id} todo={todo.todo} deleteTodo={this.deleteTodo} />)}
      </ul>
    </div>
  )
}

export default App;
