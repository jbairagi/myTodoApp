import React from 'react';
import { connect } from 'react-redux';
import { addProject, getAllProjects } from '../actions';
import { request } from './../helpers/fetchHelpers';

class PROJECTList extends React.Component{
  componentDidMount(){
    const token = window.localStorage.getItem('token')
    request('projects', 'post', null, token )
    .then(tasks => {
      tasks.userProjects.forEach(function(project) {
        this.props.dispatch(addProject(project))
      }, this);
      if(tasks.allProjects)
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
          this.props.projects.map(task => 
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
    projects: state.projects.userProjects
  }
}
  
export default connect(mapStateToProps)(PROJECTList);