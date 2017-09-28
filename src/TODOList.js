import React from 'react';
import ListItems from './ListItems';

class TODOList extends React.Component{
  constructor(props) {
    super(props);
    this.removeTask = this.removeTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  removeTask(taskId) {
    this.props.removeTask(taskId);
  }

  updateTask(task, taskId) {
    this.props.updateTask(task, taskId);
  }

  render() {
    const taskRows = this.props.tasks.map(function (task) {
			return (
        <ListItems task={task.task} taskId={task.id} removeTask={this.removeTask} updateTask={this.updateTask} key={task.id} />
			);
		},this);

    return (
      <ul className="list-group">
				{taskRows}
			</ul>
    );
  }
}

export default TODOList;
