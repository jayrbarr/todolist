import React from 'react';

const Todo = ({ todo, id, deleteTodo }) => (
  <li>{todo}  <span id={id} style={{ color: "red" }} onClick={deleteTodo}>X</span></li>
);

export default Todo;
