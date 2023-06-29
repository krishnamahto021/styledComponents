import React, { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    return (
      <div className="list">
        {this.props.todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} handleRemove={this.props.handleRemove} />
        ))}
      </div>
    );
  }
}
