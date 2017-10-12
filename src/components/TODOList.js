import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import {request} from './../helpers/fetchHelpers';

class TODOList extends React.Component{
  componentDidMount(){
    const token = window.localStorage.getItem('token')
    request('projects', 'post', null, token )
    .then(tasks => {
      tasks.userProjects.forEach(function(project) {
        this.props.dispatch(addTodo(project))
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
          this.props.todos.map(task => 
            <li className='list-group-item clearfix add-space' key={task.id}>
              <h3>Project Title: {task.title}</h3>
              <p>
                Description: {task.description}
              </p>
              <p>
                Beginning Date: {task.beginningDate}
              </p>
              <p>
                Due Date: {task.dueDate}
              </p>
            </li>
          )
        }
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.userProjects,
    user: state.userLogin.user
  }
}
  
export default connect(mapStateToProps)(TODOList);