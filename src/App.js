import React from 'react';

class ListItems extends React.Component{
  constructor(props){
    super(props);
    this.removeTask = this.removeTask.bind(this);
  }

  removeTask(e) {
		this.props.removeTask(this.props.taskId);
  	e.preventDefault();
	}
  updateTask(e) {
		e.preventDefault();
		// this.props.remove(this.props.taskId);
		// return;
	}

  render(){
    return(
      <div>
				{this.props.task}
        <button type="button" onClick={this.updateTask}>Update</button>
        <button type="button" onClick={this.removeTask}>Delete</button>
			</div>
    );
  }
}

class TODOList extends React.Component{
  constructor(props){
    super(props);
    this.removeTask = this.removeTask.bind(this);
  }

  removeTask(taskId){
    this.props.removeTask(taskId);
		return;
  }

  render() {
    const taskRows = this.props.tasks.map(function (task) {
			return (
        <ListItems task={task.task} taskId={task.id} removeTask={this.removeTask} key={task.id} />
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

class TODOApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {id: 1, task: 'learn React'},
        {id: 2, task: 'apply React'}
      ]
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

  handleTaskUpdation(taskId) {
		let data = this.state.data;
    //
    //
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
        <TODOAddForm onTaskSubmit = {this.handleSubmit}/>
        <TODOList tasks={this.state.data} updateTask={this.handleTaskUpdation} removeTask={this.handleTaskRemoval} />
      </div>
    );
  }
}

export default TODOApp;
