import { put, call, all, takeLatest } from 'redux-saga/effects';
import { login, addNewUser } from '../api';

export default function* userSaga() {
	yield takeLatest('LOGIN', watchUserLogin);
	yield takeLatest('ADD_USER', watchAddUser);
}

function* watchUserLogin({ userCredentials }) {
	try {
		const response = yield call(login, userCredentials);
		if (response.status === 200) {
			window.localStorage.setItem('token', response.data.token);
			yield all([
				put({ type: 'SET_USER', user: response.data.username }),
				put({ type: 'SET_LOGIN_STATUS', isLoggedIn: response.data.token !== undefined }),
				put({ type: 'SET_USER_ROLE', isRoleManager: response.data.role === 'manager' })
			]);
		}
		else
			alert(response.message);
	}
	catch (error) {
		alert(error);
	}
}

function* watchAddUser({ userInfo }) {
	const response = yield call(addNewUser, userInfo);
	if (response.status === 200) {
		alert(response.message);
	}
	else
		alert(response.message);
}
