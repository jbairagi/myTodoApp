import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
import HomePage from './components/HomePage';
import Login from './components/LoginPage';
import Dashboard from './components/App';
import NotFound from './components/NotFound';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
    <Route path="login" component={Login} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;