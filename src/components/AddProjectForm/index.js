import React from 'react';
import { addNewProject } from '../../actions';

const AddProjectForm = ({ dispatch }) => {
	let title, description, beginningDate, dueDate, developer;
	const onSubmit = (e) => {
		e.preventDefault();
		if (!title.value.trim() || !description.value.trim() || !beginningDate.value.trim() || !dueDate.value.trim() || !developer.value.trim()) {
			alert('Please fill all the fields');
			return;
		}
		const projectInfo = 'title=' + title.value + '&description=' + description.value + '&beginningDate=' + beginningDate.value + '&dueDate=' + dueDate.value + '&developer=' + developer.value;
		dispatch(addNewProject(projectInfo));
		document.getElementById('myform').reset();
	};
	return (
		<div>
			<form id="myform" className="form-inline">
				<div className="row">
					<div className="col-xs-12">
						<div className="input-group input-group-lg add-space">
							<div className="form-group">
								<input type="text" className="form-control" required ref={node => { title = node; }} placeholder="Project title" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" required ref={node => { description = node; }} placeholder="Project Description" />
							</div>
							<div className="form-group">
								<input type="date" className="form-control" required ref={node => { beginningDate = node; }} placeholder="Beginning Date" />
							</div>
							<div className="form-group">
								<input type="date" className="form-control" required ref={node => { dueDate = node; }} placeholder="Due Date" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" required ref={node => { developer = node; }} placeholder="Developer" />
							</div>
							<input type="submit" className="btn btn-success add-btn" onClick={onSubmit} value="Add" />
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddProjectForm;
