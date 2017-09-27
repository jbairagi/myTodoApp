import React from 'react';

class ListItems extends React.Component{
  render(){
    return(
      <div>
				{this.props.task} <button type="button">Update</button> <button type="button">Delete</button>
			</div>
    );
  }
}

class TODOList extends React.Component{
  render(){
    const taskRows = [];

    this.props.tasks.forEach((task) => {
      taskRows.push(<ListItems task={task.task} key={task.id} />);
    });
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
    this.props.onTaskSubmit(e.target.value);
    console.log(e.target.value);
    e.preventDefault();
	}

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.props.tasks} placeholder="Enter new task here" />
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
        {id: '1', task: 'learn React'},
        {id: '2', task: 'apply React'}
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTaskRemoval(nodeId) {
		let data = this.state.data;

		// data = data.filter(function (e) {
		// 	return e.id !== nodeId;
		// });
		this.setState({data : data});
	}

  handleSubmit(task) {
		let data = this.state.data;
		let id = data.length + 2 ;
		data = data.concat([{id, task}]);
		this.setState({data : data});
	}

  render() {
    return (
      <div>
        <TODOAddForm onTaskSubmit = {this.handleSubmit}/>
        <TODOList tasks={this.state.data} removeTask={this.handleTaskRemoval} />
      </div>
    );
  }
}

export default TODOApp;
