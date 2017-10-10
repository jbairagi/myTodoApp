import React from 'react';
import TODOAddForm from './../containers/TODOAddForm';
import TODOList from './TODOList';
import AppHead from './AppHead';
import {connect} from 'react-redux'
import './../App.css';

const TODOApp = ({isRoleManager}) => (
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <AppHead />
        {isRoleManager && <TODOAddForm />}
        <TODOList />
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
     isRoleManager: state.userLogin.isRoleManager
  }
}

export default connect(mapStateToProps)(TODOApp);
