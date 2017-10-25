import React from 'react';
import { browserHistory } from 'react-router';
import { clearStore } from '../../actions';

const LogoutPage = ({ dispatch }) => {
	const onSubmit = (e) => {
		e.preventDefault();
		window.localStorage.removeItem('token');
		browserHistory.push('/');
		dispatch(clearStore());
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
};

export default LogoutPage;
