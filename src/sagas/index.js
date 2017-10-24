import { fork, all } from 'redux-saga/effects';
import loginSaga from './watchUserLogin';
import projectSaga from './watchAddProjects';

export default function* rootSaga() {
    yield all([
        fork(loginSaga),
        fork(projectSaga)
    ]);
}