import React from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import LogoutPage from './logoutPage'
import TODOApp from './TODOApp'

const App = ({isLoggedIn}) => (
  <div>
    {!isLoggedIn && browserHistory.push('/login') }
    {isLoggedIn && <LogoutPage />}
    {isLoggedIn && <TODOApp />}
  </div>
);

const mapStateToProps = state => {
  return {
     isLoggedIn: state.userLogin.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);
