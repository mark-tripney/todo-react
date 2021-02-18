import Todo from './components/Todo';
import Form from './components/Form';

function App(props) {
  const todoList = props.tasks.map(todo =>
      <Todo id={todo.id} name={todo.name} completed={todo.completed}
          key={todo.id}/>);
  return (
      <div className="todos">
        <h1>todos</h1>
        <Form todoList={todoList}/>
        <small>Left-click to toggle complete/incomplete.<br/>Right-click to
          delete.</small>
      </div>
  );
}

export default App;
