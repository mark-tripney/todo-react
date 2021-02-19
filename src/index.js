import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  // {id: "todo-0", name: "First task", completed: false},
  // {id: "todo-1", name: "Second task", completed: true},
];

render(<App todos={DATA}/>, document.getElementById('root'));
