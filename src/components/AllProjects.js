import React from 'react';
import ManageProjects from './ManageProjects';
import {connect} from 'react-redux';
import {getAllProjects} from '../actions';
import {request} from './../helpers/fetchHelpers';

class AllProjects extends React.Component{
  componentDidMount(){
    const token = window.localStorage.getItem('token')
    request('projects', 'post', null, token )
    .then(tasks => {
      tasks.forEach(function(element) {
        this.props.dispatch(getAllProjects(element.title))
      }, this);
    })
    .catch(function (error) {  
      console.log('Request failed', error);  
    });
  }

  render(){
    console.log(this.props.todos)
    return (
      <ul className="list-group">
        {
          this.props.todos.map(task => <ManageProjects task={task} taskId={task.id} key={task.id} />)
        }
      </ul>
    );
  }
}

const mapStateToProps = state => {

  console.log('===============');
  console.log(state);
  
  return {

    todos: state.todos.allProjects,
    user: state.userLogin.user
  }
}
  
export default connect(mapStateToProps)(AllProjects);