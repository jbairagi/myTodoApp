import { fork, all } from 'redux-saga/effects';
import userSaga from './UserSaga';
import projectSaga from './projectSaga';

export default function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(projectSaga)
    ]);
}