import React from 'react';

class ListItems extends React.Component{
  constructor(props){
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

  render(){
    return(
      <div>
        <br></br>
				Task {this.props.taskId}: {this.props.task} <br></br>
        <button type="button" onClick={this.removeTask}>Delete task</button>
        <form onSubmit={this.updateTask}>
          <input type="submit" value="Update" />
          <input type="text" ref={(input) => this.todoUpdate = input} placeholder="Update the task here" />
        </form>
			</div>
    );
  }
}

class TODOList extends React.Component{
  constructor(props){
    super(props);
    this.removeTask = this.removeTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  removeTask(taskId){
    this.props.removeTask(taskId);
		return;
  }
  updateTask(task, taskId){
    this.props.updateTask(task, taskId);
		return;
  }

  render() {
    const taskRows = this.props.tasks.map(function (task) {
			return (
        <ListItems task={task.task} taskId={task.id} removeTask={this.removeTask} updateTask={this.updateTask} key={task.id} />
			);
		},this);

    return (
      <div>
        {taskRows}
      </div>
    );
  }
}

class TODOAddForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.onTaskSubmit(this.todoInput.value);
    e.preventDefault();
	}

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={(input) => this.todoInput = input} placeholder="Enter new task here" />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

class AppHead extends React.Component{
  render(){
    return(
      <div>
        Todo List App:<br></br><br></br>
      </div>
    );
  }
}

class TODOApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.tasks
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskRemoval = this.handleTaskRemoval.bind(this);
    this.handleTaskUpdation = this.handleTaskUpdation.bind(this);
  }

  handleTaskRemoval(taskId) {
		let data = this.state.data;
		data = data.filter(function (e) {
			return e.id !== taskId;
		});
		this.setState({data : data});
	}

  handleTaskUpdation(task, taskId) {
		let data = this.state.data;
    data[data.findIndex((obj => obj.id === taskId))].task = task;
		this.setState({data : data});
	}

  handleSubmit(task) {
		let data = this.state.data;
		let id = data.length + 1 ;
		data = data.concat([{id, task}]);
		this.setState({data : data});
	}

  render() {
    return (
      <div>
        <AppHead />
        <TODOAddForm onTaskSubmit = {this.handleSubmit}/>
        <TODOList tasks={this.state.data} updateTask={this.handleTaskUpdation} removeTask={this.handleTaskRemoval} />
      </div>
    );
  }
}

export default TODOApp;
