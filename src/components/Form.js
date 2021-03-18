import React, {useState} from "react";

export default function Form({todoList, addTodo}) {
  const [todoTitle, setTodoTitle] = useState("");

  function handleInputChange(e) {
    setTodoTitle(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (todoTitle) {
      addTodo(todoTitle);
      setTodoTitle("");
    }
  }

  return (
      <form id="form" onSubmit={handleFormSubmit}>
        {/* TODO: Placeholder text should be slightly lighter */}
        <input type="text" className="input" id="input"
            placeholder="Todo..."
            aria-label="Enter todo" autoComplete="off" value={todoTitle}
            onChange={handleInputChange}/>
      </form>
  )
}
