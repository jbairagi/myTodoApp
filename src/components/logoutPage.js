import React from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router'
import {clearStore} from '../actions';

class logoutPage extends React.Component{
  render(){
    return(
      <div className="container add-top-margin">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
          <form className="form-horizontal"  
            onSubmit={e => {
              e.preventDefault()
              window.localStorage.removeItem('token');
              browserHistory.push('/');
              this.props.dispatch(clearStore())
            }}
          >
            <div className="form-group"> 
              <div className="col-sm-offset-10">
                <button type="submit" className="btn btn-default">Logout</button>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(logoutPage);