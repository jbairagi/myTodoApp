import React from 'react';
import {connect} from 'react-redux';
import {setLoginStatus, setUser, clearList} from '../actions';

class logoutPage extends React.Component{
  
  render(){
    return(
      <div className="container add-top-margin">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
          <form className="form-horizontal"  
            onSubmit={e => {
              e.preventDefault()
              this.props.dispatch(setUser(undefined))
              this.props.dispatch(setLoginStatus(false))
              this.props.dispatch(clearList())
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