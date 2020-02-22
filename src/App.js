import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      isClicked: false,
      todos: [],
    }
    this.delTodo = this.delTodo.bind(this);
  };

  // Delete Todos
  delTodo(name, i) {
    let todos = this.state.todos.slice()
    document.getElementsByClassName('todoItem')[i].style.display = 'none'
    this.setState({
      todos,
    });
  }
  // Add todos ; handle isClicked
  handleClick = () => {
    let isClicked = !this.state.isClicked
    let newTodo = this.state.text
    this.setState({
      isClicked,
      todos: [...this.state.todos, newTodo],
      text: ''
    })
  }
  // update state {text} after each input
  onChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div style={{ "display": "flex", "position": "fixed", "flex-wrap": "wrap" }}>
        <p>Create To-Do items. You can cross them out and delete them.</p>
        <textarea value={this.state.text} onChange={this.onChange}></textarea>
        <button style={btnStyle} onClick={this.handleClick}>Create To-Do</button>
        {this.state.todos.map((todos, i) => (
          <p className="todoItem" style={{ "display": "flex", "flex-wrap": "wrap" }}>
            <label>
              <input type="checkbox" class="strikethrough" /> {' '}
              <span>{todos}</span>
            </label>
            <button style={btnStyle} onClick={() => { this.delTodo(todos, i) }} key={i}>delete</button>
          </p>
        ))}
      </div>
    );
  }
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer'
}

export default App;