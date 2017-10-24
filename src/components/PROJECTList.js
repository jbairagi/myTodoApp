import React from 'react';
import { connect } from 'react-redux';
import { projects } from '../actions';
// import { request } from './../helpers/fetchHelpers';

class PROJECTList extends React.Component{
  componentDidMount(){
		this.props.dispatch(projects())
  }

  render(){
    return (
      <ul className="list-group">
        {
          this.props.projects.map(task => 
            <li className='list-group-item clearfix add-space' key={task._id}>
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