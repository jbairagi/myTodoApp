import { put, call, all, takeLatest } from 'redux-saga/effects';
import { login } from '../api/api';

export default function* loginSaga() {
	yield takeLatest('LOGIN', watchUserLogin);
}

function* watchUserLogin({ userCredentials }) {
  try {
		const response = yield call(login, userCredentials);
		if(response.status === 200){
			window.localStorage.setItem('token', response.data.token);
			yield all ([
				put({ type: 'SET_USER', user: response.data.username }),
				put({ type: 'SET_LOGIN_STATUS', isLoggedIn: response.data.token !== undefined }),
				put({ type: 'SET_USER_ROLE', isRoleManager: response.data.role === 'manager' })
			]); 
		}
		else
			alert(response.message)
	} 
	catch (error) {
		console.log(error)
  }
}