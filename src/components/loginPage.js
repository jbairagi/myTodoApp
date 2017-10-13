import React from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router'
import { setLoginStatus, setUser, setUserRole } from '../actions';
import { request } from './../helpers/fetchHelpers';

class loginPage extends React.Component{
  componentWillMount(){
    if(window.localStorage.getItem('token') === undefined || null) return;
    else if (window.localStorage.getItem('token')) browserHistory.push('/dashboard');
  }

  render(){
    let uname
    let pass
    return(
      <div>
        <Link className="app-title" to="/">Home</Link>
        <div className="container add-top-margin">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
            <form className="form-horizontal"  
              onSubmit={e => {
                e.preventDefault()
                if (!uname.value.trim() || !pass.value.trim()) {
                  return
                }
                const username = uname.value
                const body = 'username='+username+'&password='+pass.value
                request('login', 'post', body)
                .then( (result) => {
                  if(result.status === 200){
                    const data = result.data
                    window.localStorage.setItem('token', data.token);
                    this.props.dispatch(setUser(username))
                    this.props.dispatch(setLoginStatus(data.token !== undefined))
                    this.props.dispatch(setUserRole(result.data.role === 'manager'))
                    browserHistory.push('/dashboard');
                  }
                  else
                    alert(result.message)
                })
                .catch( (error) => {
                  window.localStorage.removeItem('token');
                  browserHistory.push('*')
                  console.log(error.status)
                  console.log(error.message);  
                });
                uname.value = ''
                pass.value = ''
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
      </div>
    );
  }
}

export default connect()(loginPage);