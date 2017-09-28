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
    if(this.todoUpdate.value === '')
      e.preventDefault();
    else{
		  this.props.updateTask(this.todoUpdate.value, this.props.taskId);
  	  e.preventDefault();
    }
	}

  render() {
    return (
      <li className='list-group-item clearfix add-space'>
			  Task {this.props.taskId}: {this.props.task}
        <input type="text" className="form-control add-space" required ref={(input) => this.todoUpdate = input} placeholder="Update the task here" />
        <button type="button" className="btn btn-info add-space" onClick={this.updateTask}>Update</button> {' '}
        <button type="button" className="btn btn-danger add-space" onClick={this.removeTask}>Delete</button>
			</li>
    );
  }
}

export default ListItems;
