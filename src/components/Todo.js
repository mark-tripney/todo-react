import React from 'react';

export default function Todo({ todo, handleToggleCompleted }) {
  function handleClick(e) {
    e.preventDefault();
    handleToggleCompleted(e.currentTarget.id);
  }

  return (
    <li
      id={todo.id}
      className={todo.completed ? 'completed' : ''}
      onClick={handleClick}
    >
      {todo.name}
    </li>
  );
}
