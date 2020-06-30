import React from 'react';

const TodoEntry = (props) => {

  return (
    <form onSubmit={props.submitTodo} >
      <label>Todo:
        <input type="text" placeholder="Enter new todo" onChange={props.todoChange} value={props.todo} />
      </label>
    </form>
  )
}

export default TodoEntry;
