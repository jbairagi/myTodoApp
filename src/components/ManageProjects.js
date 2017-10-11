import React from 'react';
import {connect} from 'react-redux';
import {request} from './../helpers/fetchHelpers';
import {deleteTodo, updateTodo} from './../actions';

class ManageProjects extends React.Component{
  removeTask = (e) => {

    const token= window.localStorage.getItem('token') 
    const body = "title=" + this.props.task.title
    request('removeProject', 'post', body, token)
    .then( (result) => {

      console.log(result);

      this.props.onDelete(this.props.taskId);
    })
    .catch( (error) => {
      console.log(error);  
    });     
    e.preventDefault();
  }

  updateTask = (e) => {
    if(this.todoUpdate.value === '')
      e.preventDefault();
    else {
      this.props.onUpdate({
        title: this.todoUpdate.value,
        id: this.props.taskId
      });
      e.preventDefault();
    }
  }

  render() {
    const id = "collapseExample-" + this.props.taskId;
    const href = "#"+id;
    return (
      <li className='list-group-item clearfix add-space'>
			  Project: {this.props.task.title}
        {this.props.isRoleManager &&
        <p>
          <button type="button" className="btn btn-danger add-space" onClick={this.removeTask}>Delete</button> {' '}
          <a className="btn btn-primary add-space" data-toggle="collapse" href= {href} aria-expanded="false" aria-controls="collapseExample">
            Update
          </a>
        </p>}
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

const mapStateToProps = state => {
  return {
     isRoleManager: state.userLogin.isRoleManager
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteTodo(id))
    },
    onUpdate: todo => {
      dispatch(updateTodo(todo))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageProjects);
