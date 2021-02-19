import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import Todo from './components/Todo';
import Form from './components/Form';

function App(props) {
  const [todos, setTodos] = useState(props.todos);

  function addTodo(name) {
    const newTodo = {id: `todoID-${nanoid()}`, name: name, completed: false};
    setTodos([...todos, newTodo]);
  }

  const todoList = todos.map(todo =>
      <Todo id={todo.id} name={todo.name} completed={todo.completed}
          key={todo.id}/>);

  const todosCount = todoList.length;

  return (
      <div className="todos">
        <h1>{todosCount ? todosCount : ''} {todosCount === 1 ? 'todo' : 'todos'}</h1>
        <Form addTodo={addTodo} todoList={todoList}/>
        <small>Left-click to toggle complete/incomplete.<br/>Right-click to
          delete.</small>
      </div>
  );
}

export default App;
