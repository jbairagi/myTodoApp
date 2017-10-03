import React from 'react';
import ListItems from './ListItems';

export default function TODOList(props) {
  const taskRows = props.tasks.map((task) => {
    return (
      <ListItems task={task.task} taskId={task.id} removeTasko={props.removeTask} updateTask={props.updateTask} key={task.id} />
    );
  },this);

  return (
    <ul className="list-group">
      {taskRows}
    </ul>
  );
}


// For future reference
//
//
// class TODOList extends React.Component{
//   constructor(props) {
//     super(props);
//     this.removeTask = this.removeTask.bind(this);
//     this.updateTask = this.updateTask.bind(this);
//   }
//
//   removeTask(taskId) {
//     this.props.removeTask(taskId);
//   }
//
//   updateTask(task, taskId) {
//     this.props.updateTask(task, taskId);
//   }
//
//   render() {
//     const taskRows = this.props.tasks.map(function (task) {
// 			return (
//         <ListItems task={task.task} taskId={task.id} removeTasko={this.removeTask} updateTask={this.updateTask} key={task.id} />
// 			);
// 		},this);
//
//     return (
//       <ul className="list-group">
// 				{taskRows}
// 			</ul>
//     );
//   }
// }
