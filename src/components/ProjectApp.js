import React from 'react';
import { connect } from 'react-redux';
import AddProjectForm from './../containers/AddProjectForm';
import AddUserForm from './../containers/AddUserForm';
import ProjectList from './ProjectList';
import AllProjects from './AllProjects';
import AppHead from './AppHead';

const ProjectApp = ({isRoleManager}) => (
	<div className="container">
		<div className="row">
			<div className="col-md-4">
				{isRoleManager && <AllProjects />}
			</div>
			<div className={isRoleManager ? 'col-md-8' : 'col-md-8 col-md-offset-2'}>
				{isRoleManager && <AppHead title='Add Project'/>}
				{isRoleManager && <AddProjectForm />}
				{isRoleManager && <AppHead title='Add New User'/>}
				{isRoleManager && <AddUserForm />}
				<AppHead title='Projects Assigined'/>
				<ProjectList />
			</div>
		</div>
	</div>
);

const mapStateToProps = state => ({
	isRoleManager: state.userLogin.isRoleManager
});

export default connect(mapStateToProps)(ProjectApp);
