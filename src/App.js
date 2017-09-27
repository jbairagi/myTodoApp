import React from 'react';

class ListItems extends React.Component{
  render(){
    return(
      <li>
				{this.props.task} <button type="button">Delete</button>
			</li>
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
      <table>
        {taskRows}
      </table>
    );
  }
}

class TODOAddForm extends React.Component{
  render(){
    return(
      <form>
        <input type="text" placeholder="Enter new task here" />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

class TODOApp extends React.Component {

  render() {
    return (
      <div>
        <TODOAddForm />
        <TODOList tasks={TASKS} />
      </div>
    );
  }
}

let TASKS = [
  {id: '1', task: 'learn React'},
  {id: '2', task: 'apply React'}
];

export default TODOApp;
