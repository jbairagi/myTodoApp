import React from 'react';
import ListItems from './ListItems';
import {connect} from 'react-redux';

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

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TODOList);
