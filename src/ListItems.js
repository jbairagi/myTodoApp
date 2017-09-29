import React from 'react';

class ListItems extends React.Component{
  removeTask = (e) => {
		this.props.removeTasko(this.props.taskId);
  	e.preventDefault();
	}

  updateTask = (e) => {
    if(this.todoUpdate.value === '')
      e.preventDefault();
    else {
		  this.props.updateTask(this.todoUpdate.value, this.props.taskId);
  	  e.preventDefault();
    }
	}

  render() {
    const id = "collapseExample-" + this.props.taskId;
    const href = "#"+id;
    return (
      <li className='list-group-item clearfix add-space'>
			  Task {this.props.taskId}: {this.props.task}
        <p>
          <button type="button" className="btn btn-danger add-space" onClick={this.removeTask}>Delete</button> {' '}
          <a className="btn btn-primary add-space" data-toggle="collapse" href= {href} aria-expanded="false" aria-controls="collapseExample">
            Update
          </a>
        </p>
        <div className="collapse" id={id}>
          <div className="card card-body">
            <div className="row">
              <div className="col-xs-12">
                <div className="input-group input-group-lg">
                  <input type="text" className="form-control add-space" required ref={(input) => this.todoUpdate = input} placeholder="Update the task here" />
                  <div className="input-group-btn">
                    <button type="button" className="btn btn-info add-space" data-toggle="collapse" href= {href} aria-expanded="false" aria-controls="collapseExample" onClick={this.updateTask}>&#x2713;</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
			</li>
    );
  }
}

export default ListItems;
