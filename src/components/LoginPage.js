import React from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import { login } from '../actions';

class loginPage extends React.Component{
	componentWillMount(){
		if(this.props.isLoggedIn) {
			browserHistory.push('/dashboard');
		}
	}

	componentWillReceiveProps(nextProps){
		if((this.props.isLoggedIn !== nextProps.isLoggedIn) && nextProps.isLoggedIn) {
			browserHistory.push('/dashboard');
		}
	}

	render(){
		let uname;
		let pass;
		const onSubmit= (e) => {
			e.preventDefault();
			if (!uname.value.trim() || !pass.value.trim()) {
				return;
			}
			this.props.dispatch(login('username='+uname.value+'&password='+pass.value));
			uname.value = '';
			pass.value = '';
		};
		return(
			<div>
				<Link className="app-title" to="/">Home</Link>
				<div className="container add-top-margin">
					<div className="row">
						<div className="col-md-8 col-md-offset-2">
							<form className="form-horizontal">
								<div className="form-group">
									<label className="control-label col-sm-2" htmlFor="username">Username:</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" required ref={node => {uname = node;}} id="username" placeholder="Usename" />
									</div>
								</div>
								<div className="form-group">
									<label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
									<div className="col-sm-10"> 
										<input type="password" className="form-control" id="pwd" required ref={node => {pass = node;}} placeholder="Password" />
									</div>
								</div>
								<div className="form-group"> 
									<div className="col-sm-offset-2 col-sm-10">
										<button type="submit" className="btn btn-default" onClick={onSubmit}>Login</button>
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

const mapStateToProps = state => ({
	isLoggedIn: state.userLogin.isLoggedIn
});

export default connect(mapStateToProps)(loginPage);
