import { put, call, takeLatest } from 'redux-saga/effects';
import { getProjects, addNewProjects, removeProject, updateProjectDescription, updateProjectBeginningDate, updateProjectDueDate } from '../api/api';

export default function* projectSaga() {
	yield takeLatest('PROJECT', watchGetAllProjects);
	yield takeLatest('ADD_PROJECT', watchAddNewProject);
	yield takeLatest('REMOVE_PROJECT', watchRemoveProject);
	yield takeLatest('UPDATE_DESCRIPTION', watchProjectDescriptionUpdate);
	yield takeLatest('UPDATE_BEGINNING_DATE', watchProjectBeginningDateUpdate);
	yield takeLatest('UPDATE_DUE_DATE', watchProjectDueDateUpdate);
}

function* watchGetAllProjects() {
	try {
		const response = yield call(getProjects);
		if (response.status === 200) {
			yield put({ type: 'GET_USER_PROJECTS', projects: response.data.userProjects });
			if (response.data.allProjects)
				yield put({ type: 'GET_ALL_PROJECTS', projects: response.data.allProjects });
		}
		else
			alert(response.err);
	}
	catch (error) {
		alert(error);
	}
}

function* watchAddNewProject({ projectInfo }) {
	try {
		const response = yield call(addNewProjects, projectInfo);
		if (response.status === 200) {
			yield put({ type: 'SET_NEW_PROJECT', response: response });
		}
		else
			alert(response.err);
	}
	catch (error) {
		alert(error);
	}
}

function* watchRemoveProject({ id, projectInfo }) {
	try {
		const response = yield call(removeProject, projectInfo);
		if (response.status === 200) {
			yield put({ type: 'DELETE_PROJECT', id });
		}
		else
			alert(response.err);
	}
	catch (error) {
		alert(error);
	}
}

function* watchProjectDescriptionUpdate({ project }) {
	try {
		yield call(updateProjectDescription, project.projectInfo);
	}
	catch (error) {
		alert(error);
	}
}

function* watchProjectBeginningDateUpdate({ project }) {
	try {
		yield call(updateProjectBeginningDate, project.projectInfo);
	}
	catch (error) {
		alert(error);
	}
}

function* watchProjectDueDateUpdate({ project }) {
	try {
		yield call(updateProjectDueDate, project.projectInfo);
	}
	catch (error) {
		alert(error);
	}
}