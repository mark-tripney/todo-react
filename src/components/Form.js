import React, {useState} from 'react';

export default function Form({todoList, addTodo}) {
  const [todoTitle, setTodoTitle] = useState('');

  const handleInputChange = e => {
    setTodoTitle(e.target.value);
  }

  const handleFormSubmit = e => {
    e.preventDefault();
    if (todoTitle) {
      addTodo(todoTitle);
      setTodoTitle('');
    }
  }

  return (
      <form id="form" onSubmit={handleFormSubmit}>
        <input
            type="text"
            className="input"
            id="input"
            placeholder="Todo..."
            aria-label="Enter todo"
            autoComplete="off"
            value={todoTitle}
            onChange={handleInputChange}
        />
      </form>
  );
}
