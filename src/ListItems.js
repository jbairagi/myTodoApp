import React from 'react';

class ListItems extends React.Component{
  constructor(props) {
    super(props);
    this.removeTask = this.removeTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  removeTask(e) {
		this.props.removeTask(this.props.taskId);
  	e.preventDefault();
	}

  updateTask(e) {
		this.props.updateTask(this.todoUpdate.value, this.props.taskId);
  	e.preventDefault();
	}

  render() {
    return (
      <div>
        <br></br>
				Task {this.props.taskId}: {this.props.task} <br></br>
        <button type="button" onClick={this.removeTask}>Delete task</button>
        <form onSubmit={this.updateTask}>
          <input type="submit" value="Update" />
          <input type="text" required ref={(input) => this.todoUpdate = input} placeholder="Update the task here" />
        </form>
			</div>
    );
  }
}

export default ListItems;
