import React from 'react';
import { connect } from 'react-redux'
import ProjectAddForm from './../containers/ProjectAddForm';
import PROJECTList from './PROJECTList';
import AllProjects from './AllProjects';
import AppHead from './AppHead';

const PROJECTApp = ({isRoleManager}) => (
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        {isRoleManager && <AllProjects />}
      </div>
      <div className={isRoleManager ? "col-md-8" : "col-md-8 col-md-offset-2"}>
        {isRoleManager && <AppHead title={'Add Project'}/>}
        {isRoleManager && <ProjectAddForm />}
        <AppHead title={'Projects Assigined'}/>
        <PROJECTList />
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
     isRoleManager: state.userLogin.isRoleManager
  }
}

export default connect(mapStateToProps)(PROJECTApp);
