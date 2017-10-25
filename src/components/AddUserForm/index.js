import React from 'react';
import { addNewUser } from '../../actions';

const AddUserForm = ({ dispatch }) => {
	let username, emailId, password, role;
	const onSubmit = (e) => {
		e.preventDefault();
		if (!username.value.trim() || !emailId.value.trim() || !password.value.trim() || !role.value.trim()) {
			alert('Please fill all the fields');
			return;
		}
		if(role.value !== 'manager'||'employee') {
			alert('Role can be a manager or employee only');
			return;
		}
		const userInfo = 'username=' + username.value + '&password=' + password.value + '&email=' + emailId.value + '&role=' + role.value;
		dispatch(addNewUser(userInfo));
		document.getElementById('myform').reset();
	};
	return (
		<div>
			<form id="myform" className="form-inline">
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
							<input type="submit" className="btn btn-success add-btn" onClick={onSubmit} value="Add" />
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddUserForm;
