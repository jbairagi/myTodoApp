import * as types from '../constants/actionTypes';
import { changeDateFormat } from '../utility/changeDateFormat';

const initialStateUser = {
	allProjects: [],
	userProjects: []
};

const projects = (state = initialStateUser, action, root) => {
	switch (action.type) {
	case types.GET_USER_PROJECTS: {
		action.projects.map(project => {
			return (
				project.beginningDate = changeDateFormat(project.beginningDate),
				project.dueDate = changeDateFormat(project.dueDate)
			);
		});
		const newUserProjects = {
			...state,
			userProjects: action.projects
		};
		return newUserProjects;
	}

	case types.SET_NEW_PROJECT: {
		let project = {
			_id: action.response.project._id,
			title: action.response.project.title,
			description: action.response.project.description,
			beginningDate: changeDateFormat(action.response.project.beginningDate),
			dueDate: changeDateFormat(action.response.project.dueDate)
		};
		const allProjectsArrayNewProject = [
			...state.allProjects,
			project
		];

		const finalStateNewProject = {
			...state,
			allProjects: allProjectsArrayNewProject
		};

		if (root.userLogin.user === action.response.developer) {
			const userProjectsArrayNewProject = [
				...state.userProjects,
				project
			];
			finalStateNewProject.userProjects = userProjectsArrayNewProject;
		}
		return finalStateNewProject;
	}

	case types.GET_ALL_PROJECTS: {
		action.projects.map(project => {
			return (
				project.beginningDate = changeDateFormat(project.beginningDate),
				project.dueDate = changeDateFormat(project.dueDate)
			);
		});
		const allProjects = {
			...state,
			allProjects: action.projects
		};
		return allProjects;
	}

	case types.UPDATE_DESCRIPTION: {
		const allProjectsArrayUpdateDescription = state.allProjects.map(project =>
			(project._id === action.project.id)
				? { ...project, description: action.project.description }
				: project);

		const userProjectsArrayUpdateDescription = state.userProjects.map(project =>
			(project._id === action.project.id)
				? { ...project, description: action.project.description }
				: project);

		const finalStateUpdateDescription = {
			...state,
			allProjects: allProjectsArrayUpdateDescription,
			userProjects: userProjectsArrayUpdateDescription
		};
		return finalStateUpdateDescription;
	}

	case types.UPDATE_BEGINNING_DATE: {
		const allProjectsArrayBeginningDate = state.allProjects.map(project =>
			(project._id === action.project.id)
				? { ...project, beginningDate: action.project.beginningDate }
				: project);

		const userProjectsArrayBeginningDate = state.userProjects.map(project =>
			(project._id === action.project.id)
				? { ...project, beginningDate: action.project.beginningDate }
				: project);

		const finalStateBeginningDate = {
			...state,
			allProjects: allProjectsArrayBeginningDate,
			userProjects: userProjectsArrayBeginningDate
		};
		return finalStateBeginningDate;
	}

	case types.UPDATE_DUE_DATE: {
		const allProjectsArrayDueDate = state.allProjects.map(project =>
			(project._id === action.project.id)
				? { ...project, dueDate: action.project.dueDate }
				: project);

		const userProjectsArrayDueDate = state.userProjects.map(project =>
			(project._id === action.project.id)
				? { ...project, dueDate: action.project.dueDate }
				: project);

		const finalStateDueDate = {
			...state,
			allProjects: allProjectsArrayDueDate,
			userProjects: userProjectsArrayDueDate
		};
		return finalStateDueDate;
	}

	case types.DELETE_PROJECT: {
		const allProjectsArrayDelete = state.allProjects.filter(function (e) {
			return e._id !== action.id;
		});
		const userProjectsArrayDelete = state.userProjects.filter(function (e) {
			return e._id !== action.id;
		});
		const finalStateDelete = {
			...state,
			allProjects: allProjectsArrayDelete,
			userProjects: userProjectsArrayDelete
		};
		return finalStateDelete;
	}

	case types.CLEAR_STORE: {
		return { allProjects: [], userProjects: [] };
	}

	default:
		return state;
	}
};

export default projects;
