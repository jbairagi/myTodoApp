import React from 'react';
import { Router, Route } from 'react-router'

import App from './components/App';
import Login from './components/loginPage';
// import Profile from './components/';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/login" component={Login} />
    {/* <Route path="/profile" component={Profile} /> */}
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;