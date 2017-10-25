import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { clearStore } from '../actions';

class logoutPage extends React.Component{
	render(){
		const onSubmit = (e) => {
			e.preventDefault();
			window.localStorage.removeItem('token');
			browserHistory.push('/');
			this.props.dispatch(clearStore());
		};
		return(
			<div className="container add-top-margin">
				<div className="row">
					<div className="col-md-8 col-md-offset-2">
						<form className="form-horizontal">
							<div className="form-group"> 
								<div className="col-sm-offset-10">
									<button type="submit" className="btn btn-default" onClick={onSubmit}>Logout</button>
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
