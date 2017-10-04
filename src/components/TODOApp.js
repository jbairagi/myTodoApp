import React from 'react';
import TODOAddForm from './../containers/TODOAddForm';
import TODOList from './TODOList';
import AppHead from './AppHead';
import './../App.css';

const TODOApp = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <AppHead />
        <TODOAddForm />
        <TODOList />
      </div>
    </div>
  </div>
);

export default TODOApp;
