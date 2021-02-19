import React, {useState} from "react";

export default function Form(props) {
  const [todoTitle, setTodoTitle] = useState("");
  const {todoList} = props;

  function handleInputChange(e) {
    setTodoTitle(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (todoTitle) {
      props.addTodo(todoTitle);
      setTodoTitle("");
    }
  }

  return (
      <form id="form" onSubmit={handleFormSubmit}>
        {/* TODO: Placeholder text should be slightly lighter */}
        <input type="text" className="input" id="input"
            placeholder="Enter todo..."
            aria-label="Enter todo" autoComplete="off" value={todoTitle}
            onChange={handleInputChange}/>
        <ul className="todos" id="todos" role="list">
          {todoList}
        </ul>
      </form>
  )
}
