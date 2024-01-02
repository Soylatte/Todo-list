import React, { Component } from 'react';
import TodoListTemplate from './Components/TodoListTemlplate';
import Form from './Components/Form';
import TodoItemList from './Components/TodoItemList';

class App extends Component {
  id = 3

  state = {
    input: '',
    todos: [
      {id: 0, text:"리액트 소개" , checked: false},
      {id: 1, text:"리액트 소개", checked: true},
      {id: 2, text:"리액트 소개", checked: false}
    ]
  }
}
export default App;
