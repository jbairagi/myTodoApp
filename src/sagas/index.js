import { fork, all } from 'redux-saga/effects';
import loginSaga from './watchUserLogin';
import projectSaga from './watchAddProjects';

// export default function* rootSaga() {
//     yield takeLatest('LOGIN', watchUserLogin);
// }


// import { fork } from 'redux-saga/effects';
// import firstSaga from './firstSaga';
// import secondSaga from './secondSaga';
// import thirdSaga from './thirdSaga';

export default function* rootSaga() {
    yield all([
        fork(loginSaga),
        fork(projectSaga)
        // fork(thirdSaga),
    ]);
}


// import { fork } from 'redux-saga/effects';
// import watchUserLogin from './watchUserLogin';
// // import watchAddProjects from './watchAddProjects';

// export default function* rootSaga() {
//     yield fork('LOGIN', watchUserLogin);
// }