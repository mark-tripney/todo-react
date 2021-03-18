import React, { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./Form";
import Todo from "./Todo";
import Heading from "./Heading";
import TodoList from "./TodoList";
import data from "../data.js";

function App(props) {
  const [todos, setTodos] = useState(data);
  const [activeCount, setActiveCount] = useState(
    todos.filter(todo => todo.completed === false).length
  );

  const getActiveCount = () => {
    // Return the number of uncompleted todos
    const activeTodos = todos.filter(todo => todo.completed === false).length;
    setActiveCount(activeTodos);
  };

  const todoList = todos.map(todo => (
    <Todo
      id={todo.id}
      name={todo.name}
      completed={todo.completed}
      key={todo.id}
      active={activeCount}
      updateCount={getActiveCount}
    />
  ));

  const handleToggleComplete = id => {
    let mappedCompletes = todos.map(todo =>
      todo.id === parseInt(id)
        ? { ...todo, complete: !todo.complete }
        : { ...todo }
    );
    setTodos(mappedCompletes);
    setActiveCount(
      mappedCompletes.filter(todo => todo.complete === false).length
    );
  };

  function addTodo(name) {
    const newTodo = { id: `todoID-${nanoid()}`, name: name, completed: false };
    setTodos([...todos, newTodo]);
    setActiveCount(activeCount + 1);
  }

  return (
    <div className="todos">
      <Heading count={activeCount} />
      <div className="wrapper">
        <Form addTodo={addTodo} />
        <TodoList
          todoList={todoList}
          handleToggleComplete={handleToggleComplete}
        />
      </div>
      <small>Left-click to toggle complete/incomplete.</small>
    </div>
  );
}

export default App;
