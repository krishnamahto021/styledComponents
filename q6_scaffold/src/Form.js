import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (this.state.text.trim() !== "") {
      this.props.handleAdd(this.state.text); // Call the handleAdd function from the parent component
      this.setState({ text: "" }); // Reset the input field
    }
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="What's on your mind?"
            required
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
