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
