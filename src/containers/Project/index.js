import React from 'react';
import { connect } from 'react-redux';
import AddProjectForm from '../../components/AddProjectForm';
import AddUserForm from '../../components/AddUserForm';
import ProjectList from './ProjectList';
import AllProjects from './AllProjects';
import TitleHead from '../../components/TitleHead';

const ProjectApp = ({isRoleManager, dispatch}) => (
	<div className="container">
		<div className="row">
			<div className="col-md-4">
				{isRoleManager && <AllProjects />}
			</div>
			<div className={isRoleManager ? 'col-md-8' : 'col-md-8 col-md-offset-2'}>
				{isRoleManager && <TitleHead title='Add Project'/>}
				{isRoleManager && <AddProjectForm dispatch = {dispatch}/>}
				{isRoleManager && <TitleHead title='Add New User'/>}
				{isRoleManager && <AddUserForm dispatch = {dispatch}/>}
				<TitleHead title='Projects Assigined'/>
				<ProjectList />
			</div>
		</div>
	</div>
);

const mapStateToProps = state => ({
	isRoleManager: state.userLogin.isRoleManager
});

export default connect(mapStateToProps)(ProjectApp);
