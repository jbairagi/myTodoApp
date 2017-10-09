import React from 'react';
import ListItems from './ListItems';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import {request} from './../helpers/fetchHelpers';

class TODOList extends React.Component{
  componentDidMount(){
    const body = 'username='+this.props.user
    request('projects', 'post', body).then(tasks => {
      tasks.forEach(function(element) {
        this.props.dispatch(addTodo(element.title))
      }, this);
    })
    .catch(function (error) {  
      console.log('Request failed', error);  
    });
  }

  render(){
    return (
      <ul className="list-group">
        {
          this.props.todos.map(task => <ListItems task={task.text} taskId={task.id} key={task.id} />)
        }
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    user: state.userLogin.user
  }
}
  
export default connect(mapStateToProps)(TODOList);