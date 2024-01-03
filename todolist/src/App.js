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
  handleChange = (e) => {
    this.setState({
      input:e.target.value // input 의 다음 바뀔값
    });
  }
  handleCreate = () => {
    const {input, todos} = this.state;
    this.setState ({
      input: '',
      todos: todos.concat({
        id:this.id++,
        text: input,
        checkd: false
      })
    });
  }
  handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }
  handleToggle = (id) => {
    const {todos} = this.state;
    const index = todos.findIndex(todo=>todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };
    this.setState({
      todos: nextTodos
    });
  }
  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }
  render () {
    const {input, todos} = this.state;
    const{
      handleChange,
      handleCreate,
      handleKeyDown,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={<Form
      value={input}
      onKeyDown={this.handleKeyDown}
      onChange={handleChange}
      onCreate={handleCreate}/>}>
        <TodoItemList todos={todos}
        onToggle={handleToggle}
        onRemove={handleRemove} />

      </TodoListTemplate>
    )
  }
}
export default App;