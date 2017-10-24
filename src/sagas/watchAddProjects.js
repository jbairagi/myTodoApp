import { put, call, takeLatest } from 'redux-saga/effects';
import { getProjects, addNewProjects } from '../api/api';

export default function* projectSaga() {
	yield takeLatest('PROJECT', watchGetAllProjects);
	yield takeLatest('ADD_PROJECT', watchAddNewProject);
}

function* watchGetAllProjects() {
  try {
		const response = yield call(getProjects);
		if(response.status === 200){
			yield put({ type: 'GET_USER_PROJECTS', projects: response.data.userProjects })
			if(response.data.allProjects)
				yield put({ type: 'GET_ALL_PROJECTS', projects: response.data.allProjects })
		}
		else
			alert(response.err)
	} 
	catch (error) {
		console.log(error)
  }
}

function* watchAddNewProject({porjectInfo}) {
	console.log(porjectInfo)
  try {
		const response = yield call(addNewProjects, porjectInfo);
		console.log(response)
		if(response.status === 200){
			yield put({ type: 'SET_NEW_PROJECT', response: response })
		}
		else
			alert(response.err)
		// if(response.status === 200){
		// 	yield put({ type: 'GET_USER_PROJECTS', projects: response.data.userProjects })
		// 	if(response.data.allProjects)
		// 		yield put({ type: 'GET_ALL_PROJECTS', projects: response.data.allProjects })
		// }
		// else
		// 	alert(response.err)
	} 
	catch (error) {
		console.log(error)
  }
}