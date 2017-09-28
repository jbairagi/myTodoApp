import React from 'react';
import TODOAddForm from './TODOAddForm';
import TODOList from './TODOList';
import AppHead from './AppHead';

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
		let id = data[data.length - 1].id + 1;
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
