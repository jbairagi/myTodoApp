import React from 'react';
import LoginPage from './loginPage'
import LogoutPage from './logoutPage'
import TODOApp from './TODOApp'
import {connect} from 'react-redux'

const App = ({isLoggedIn}) => (
  <div>
    {!isLoggedIn && <LoginPage />}
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
