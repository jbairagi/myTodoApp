import React from 'react';
import {connect} from 'react-redux';
import {setLoginStatus, setUser} from '../actions';

class loginPage extends React.Component{
  
  render(){
    let uname
    let pass
    return(
      <div className="container add-top-margin">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
          <form className="form-horizontal"  
            onSubmit={e => {
              e.preventDefault()
              if (!uname.value.trim() || !pass.value.trim()) {
                return
              }
              const status = true;
              this.props.dispatch(setUser(uname.value))
              this.props.dispatch(setLoginStatus(status))
            }}
          >
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="username">Username:</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" required ref={node => {uname = node}} id="username" placeholder="Usename" />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
              <div className="col-sm-10"> 
                <input type="password" className="form-control" id="pwd" required ref={node => {pass = node}} placeholder="Password" />
              </div>
            </div>
            <div className="form-group"> 
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-default">Login</button>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(loginPage);