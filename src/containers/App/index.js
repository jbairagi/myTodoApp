import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import LogoutPage from '../../components/LogoutPage';
import ProjectApp from '../Project';

const App = ({ isLoggedIn, dispatch }) => (
	<div>
		{!isLoggedIn && browserHistory.push('/login')}
		{isLoggedIn && <LogoutPage dispatch={dispatch}/>}
		{isLoggedIn && <ProjectApp />}
	</div>
);

const mapStateToProps = state => ({
	isLoggedIn: state.userLogin.isLoggedIn
});

export default connect(mapStateToProps)(App);
