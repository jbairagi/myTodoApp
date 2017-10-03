import React from 'react';
import ListItems from './ListItems';

const TODOList = ({todos}) => {
  console.log(todos);
  return (
    <ul className="list-group">
      {
        todos.map(task => <ListItems task={task.text} taskId={task.id} key={task.id} />)
      }
    </ul>
  );
}

export default TODOList
