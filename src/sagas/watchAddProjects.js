import { put, call, all, takeLatest } from 'redux-saga/effects';
import { project } from '../api/api';

export default function* projectSaga() {
	yield takeLatest('PROJECT', watchAddProjects);
}

function* watchAddProjects() {
  try {
		const response = yield call(project);
			yield put({ type: 'ADD_PROJECTS', projects: response.data.userProjects })
		if(response.status === 200){
			yield put({ type: 'ADD_PROJECTS', projects: response.data.userProjects })
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