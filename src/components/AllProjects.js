import React from 'react';
import ManageProjects from './ManageProjects';
import { connect } from 'react-redux';
import AppHead from './AppHead';

class AllProjects extends React.Component{
  render(){
    return (
      <div>
        <AppHead title={'All Projects'}/>
        <ul className="list-group">
          {
            this.props.projects.map(task => <ManageProjects task={task} taskId={task.id} key={task.id} />)
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects.allProjects
  }
}
  
export default connect(mapStateToProps)(AllProjects);