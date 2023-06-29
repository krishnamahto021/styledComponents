import React, { Component } from "react";

export class Todo extends Component {
  handleRemove = () => {
    const { index, handleRemove } = this.props;
    handleRemove(index);
  };

  render() {
    const { todo } = this.props;
    return (
      <div className="todo">
        <span>{todo.text}</span>
        <button onClick={this.handleRemove} className='button'>x</button>
      </div>
    );
  }
}
