import React from 'react';
import { Router, Route, browserHistory } from 'react-router'
import HomePage from './HomePage';
import Login from './LoginPage';
import Dashboard from './App';
import NotFound from './NotFound';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
    <Route path="login" component={Login} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;