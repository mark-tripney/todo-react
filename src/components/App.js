import React, {useState} from "react";
import Form from "./Form";
import Heading from "./Heading";
import TodoList from "./TodoList";
import data from "../data.js";

function App() {
  const [todos, setTodos] = useState(data);
  const [activeCount, setActiveCount] = useState(
      todos.filter((todo) => todo.completed === false).length
  );

  function addTodo(name) {
    let newTodo = {id: todos.length + 1, name: name, completed: false};
    setTodos([...todos, newTodo]);
    setActiveCount(activeCount + 1);
  }

  const handleToggleCompleted = (id) => {
    let mappedCompletes = todos.map((todo) =>
        todo.id === parseInt(id)
            ? {...todo, completed: !todo.completed}
            : {...todo}
    );
    setTodos(mappedCompletes);
    setActiveCount(
        mappedCompletes.filter((todo) => todo.completed === false).length
    );
  };

  return (
      <div className="todos">
        <Heading count={activeCount}/>
        <div className="wrapper">
          <Form addTodo={addTodo}/>
          <TodoList todos={todos}
                    handleToggleCompleted={handleToggleCompleted}/>
        </div>
        <small>Left-click to toggle complete/incomplete.</small>
      </div>
  );
}

export default App;
