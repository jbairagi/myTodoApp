import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import App from './App'


const HomePage = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={App}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <div className="app-header">
      <p className="app-title">
        <h1>Welcome</h1>
        <h2>EMPLOYEE-MANAGER-PROJECT</h2>
        <h2>Application</h2>
      </p>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
     isLoggedIn: state.userLogin.isLoggedIn
  }
}

export default connect(mapStateToProps)(HomePage);
