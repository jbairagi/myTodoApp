import { fork, all } from 'redux-saga/effects';
import userSaga from './userSaga';
import projectSaga from './projectSaga';

export default function* rootSaga() {
	yield all([
		fork(userSaga),
		fork(projectSaga)
	]);
}
