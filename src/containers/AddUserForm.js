import React from 'react';
import { connect } from 'react-redux';
import { addNewUser } from '../actions';

const AddUserForm = ({ dispatch }) => {
	let username, emailId, password, role;
	return (
		<div>
			<form className="form-inline"
				onSubmit={e => {
					e.preventDefault();
					if (!username.value.trim() || !emailId.value.trim() || !password.value.trim() || !role.value.trim()) {
						return;
					}
					const userInfo = 'username=' + username.value + '&password=' + password.value + '&email=' + emailId.value + '&role=' + role.value;
					dispatch(addNewUser(userInfo));
					username.value = '';
					emailId.value = '';
					password.value = '';
					role.value = '';
				}}
			>
				<div className="row">
					<div className="col-xs-12">
						<div className="input-group input-group-lg add-space">
							<div className="form-group">
								<input type="text" className="form-control" required ref={node => { username = node; }} placeholder="Username" />
							</div>
							<div className="form-group">
								<input type="email" className="form-control" required ref={node => { emailId = node; }} placeholder="Email Id" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" required ref={node => { password = node; }} placeholder="Password" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" required pattern="manager||employee" ref={node => { role = node; }} placeholder="Role" />
							</div>
							<input type="submit" className="btn btn-success add-btn" value="Add" />
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default connect()(AddUserForm);
