import React from 'react';
import Todo from './Todo';
import { nanoid } from 'nanoid';

const TodoList = ({ todos, handleToggleCompleted }) => (
  <ul>
    {todos.map((todo) => (
      <Todo
        key={nanoid()}
        todo={todo}
        handleToggleCompleted={handleToggleCompleted}
      />
    ))}
  </ul>
);

export default TodoList;
