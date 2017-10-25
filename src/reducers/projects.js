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
		const userProjectsTemp = {
			...state,
			userProjects: action.projects
		};
		return userProjectsTemp;
	}

	case types.SET_NEW_PROJECT: {
		let project = {
			_id: action.response.project._id,
			title: action.response.project.title,
			description: action.response.project.description,
			beginningDate: changeDateFormat(action.response.project.beginningDate),
			dueDate: changeDateFormat(action.response.project.dueDate)
		};
		const allProjectsArrayP = [
			...state.allProjects,
			project
		];

		const finalStateP = {
			...state,
			allProjects: allProjectsArrayP
		};

		if (root.userLogin.user === action.response.developer) {
			const userProjectsArrayP = [
				...state.userProjects,
				project
			];
			finalStateP.userProjects = userProjectsArrayP;
		}
		return finalStateP;
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
		const allProjectsArrayU = state.allProjects.map(project =>
			(project._id === action.project.id)
				? { ...project, description: action.project.description }
				: project);

		const userProjectsArrayU = state.userProjects.map(project =>
			(project._id === action.project.id)
				? { ...project, description: action.project.description }
				: project);

		const finalStateU = {
			...state,
			allProjects: allProjectsArrayU,
			userProjects: userProjectsArrayU
		};
		return finalStateU;
	}

	case types.UPDATE_BEGINNING_DATE: {
		const allProjectsArrayB = state.allProjects.map(project =>
			(project._id === action.project.id)
				? { ...project, beginningDate: action.project.beginningDate }
				: project);

		const userProjectsArrayB = state.userProjects.map(project =>
			(project._id === action.project.id)
				? { ...project, beginningDate: action.project.beginningDate }
				: project);

		const finalStateB = {
			...state,
			allProjects: allProjectsArrayB,
			userProjects: userProjectsArrayB
		};
		return finalStateB;
	}

	case types.UPDATE_DUE_DATE: {
		const allProjectsArrayDD = state.allProjects.map(project =>
			(project._id === action.project.id)
				? { ...project, dueDate: action.project.dueDate }
				: project);

		const userProjectsArrayDD = state.userProjects.map(project =>
			(project._id === action.project.id)
				? { ...project, dueDate: action.project.dueDate }
				: project);

		const finalStateDD = {
			...state,
			allProjects: allProjectsArrayDD,
			userProjects: userProjectsArrayDD
		};
		return finalStateDD;
	}

	case types.DELETE_PROJECT: {
		const allProjectsArrayD = state.allProjects.filter(function (e) {
			return e._id !== action.id;
		});
		const userProjectsArrayD = state.userProjects.filter(function (e) {
			return e._id !== action.id;
		});
		const finalStateD = {
			...state,
			allProjects: allProjectsArrayD,
			userProjects: userProjectsArrayD
		};
		return finalStateD;
	}

	case types.CLEAR_STORE: {
		return { allProjects: [], userProjects: [] };
	}

	default:
		return state;
	}
};

export default projects;
