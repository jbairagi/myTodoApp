import React from 'react';
import ManageProjects from './ManageProjects';
import { connect } from 'react-redux';
import { getAllProjects } from '../actions';
import { request } from './../helpers/fetchHelpers';

class AllProjects extends React.Component{
  componentDidMount(){
    const token = window.localStorage.getItem('token')
    request('projects', 'post', null, token )
    .then(tasks => {
      tasks.allProjects.forEach(function(project) {
        this.props.dispatch(getAllProjects(project))
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
          this.props.projects.map(task => <ManageProjects task={task} taskId={task.id} key={task.id} />)
        }
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {

    projects: state.projects.allProjects,
    user: state.userLogin.user
  }
}
  
export default connect(mapStateToProps)(AllProjects);