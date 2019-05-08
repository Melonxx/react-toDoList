import React, { Component } from 'react';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.id = 0
    this.state = {
      newTodo: '',
      todoList: [],
      option: 'doing'
    }
  }
  render () {
    return (
      <div>111</div>
    )
  }
}
