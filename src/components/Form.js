import React from "react";

export default function Form(props) {
  const {todoList} = props;
  return (
      <form id="form">
        <input type="text" className="input" id="input"
            placeholder="Enter todo text..."
            aria-label="Enter todo text" autoComplete="off"/>
        <ul className="todos" id="todos" role="list">
          {todoList}
        </ul>
      </form>
  )
}
