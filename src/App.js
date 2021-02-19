import React, {useState} from 'react';
import logo from './img/checkbox-logo.svg';
import {nanoid} from 'nanoid';
import Todo from './components/Todo';
import Form from './components/Form';

function App(props) {
  const [todos, setTodos] = useState(props.todos);

  const todoList = todos.map(todo =>
      <Todo id={todo.id} name={todo.name} completed={todo.completed}
          key={todo.id}/>);

  const todosCount = todoList.length;

  function addTodo(name) {
    const newTodo = {id: `todoID-${nanoid()}`, name: name, completed: false};
    setTodos([...todos, newTodo]);
  }


  return (
      <div className="todos">
        <div className="heading">
          <h1>{todosCount ? todosCount : ''} {todosCount === 1 ? 'todo' : 'todos'}</h1>
          <img src={logo} id="logo" alt="A tick within a square"/>
        </div>
        <Form addTodo={addTodo} todoList={todoList}/>
        <small>Left-click to toggle complete/incomplete.<br/>Right-click to
          delete.</small>
      </div>
  );
}

export default App;
