import React, { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Heading from './components/Heading';

function App(props) {
  const [todos, setTodos] = useState(props.todos);
  const todoList = todos.map((todo) => (
    <Todo
      id={todo.id}
      name={todo.name}
      completed={todo.completed}
      key={todo.id}
      count={getActiveCount}
    />
  ));

  function getActiveCount() {
    const completedCount = todoList.filter(
      (todo) => todo.props.completed === true
    ).length;
    console.log(todoList.length - completedCount);
    return todoList.length - completedCount;
  }

  function addTodo(name) {
    const newTodo = { id: `todoID-${nanoid()}`, name: name, completed: false };
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="todos">
      <Heading activeCount={getActiveCount} />
      <Form addTodo={addTodo} todoList={todoList} />
      <small>
        Left-click to toggle complete/incomplete.
      </small>
    </div>
  );
}

export default App;
