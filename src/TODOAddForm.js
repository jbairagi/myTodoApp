import React from 'react';

class TODOAddForm extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.onTaskSubmit(this.todoInput.value);
    e.preventDefault();
	}

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={(input) => this.todoInput = input} placeholder="Enter new task here" />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default TODOAddForm;
