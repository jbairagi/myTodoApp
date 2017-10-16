import React from 'react';
import {connect} from 'react-redux';
import {request} from './../helpers/fetchHelpers';
import {deleteProject, updateProjectDescription, updateBeginningDate, updateDueDate} from './../actions';

class ManageProjects extends React.Component{
  removeProject = (e) => {
    const token= window.localStorage.getItem('token') 
    const body = "title=" + this.props.task.title
    request('removeProject', 'post', body, token)
    .then( (result) => {
      this.props.onDelete(this.props.taskId);
    })
    .catch( (error) => {
      console.log(error);  
    });     
    e.preventDefault();
  }

  editProjectDescription = (e) => {
    if(this.editedDescription.value === '')
      e.preventDefault();
    else {
      const token= window.localStorage.getItem('token') 
      const body = "title=" + this.props.task.title + "&description=" + this.editedDescription.value
      request('editProjectDescription', 'post', body, token)
      .then( (result) => {
        this.props.onDescriptionUpdate({
          description: this.editedDescription.value,
          id: this.props.taskId
        });
        this.editedDescription.value = ''
      })
      .catch( (error) => {
        console.log(error);  
      });
      e.preventDefault();
    }
  }

  editBeginningDate = (e) => {
    if(this.editedBeginningDate.value === '')
      e.preventDefault();
    else {
      const token= window.localStorage.getItem('token') 
      const body = "title=" + this.props.task.title + "&beginningDate=" + this.editedBeginningDate.value
      request('editProjectBeginningDate', 'post', body, token)
      .then( (result) => {
        this.props.onBeginningDateUpdate({
          beginningDate: this.editedBeginningDate.value,
          id: this.props.taskId
        });
        this.editedBeginningDate.value = ''
      })
      .catch( (error) => {
        console.log(error);  
      });
      e.preventDefault();
    }
  }

  editDueDate = (e) => {
    if(this.editedDueDate.value === '')
      e.preventDefault();
    else {
      const token= window.localStorage.getItem('token') 
      const body = "title=" + this.props.task.title + "&dueDate=" + this.editedDueDate.value
      request('editProjectDueDate', 'post', body, token)
      .then( (result) => {
        this.props.onDueDateUpdate({
          dueDate: this.editedDueDate.value,
          id: this.props.taskId
        });
        this.editedDueDate.value = ''
      })
      .catch( (error) => {
        console.log(error);  
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
          <button type="button" className="btn btn-danger add-space" onClick={this.removeProject}>Delete</button> {' '}
          <a className="btn btn-primary add-space" data-toggle="collapse" href= {href} aria-expanded="false" aria-controls="collapseExample">
            Update
          </a>
        </p>}
        <div className="collapse" id={id}>
          <div className="card card-body">
            <div className="row">
              <div className="col-xs-12">
                <div className="input-group input-group-sm">
                  <input type="text" className="form-control add-space" required ref={(input) => this.editedDescription = input} placeholder="Description" />
                  <div className="input-group-btn">
                    <button type="button" className="btn btn-info btn-width add-space" data-toggle="collapse" href= {href} aria-expanded="false" aria-controls="collapseExample" onClick={this.editProjectDescription}>Edit Description</button>
                  </div>
                </div>
                <div className="input-group input-group-sm">
                  <input type="date" className="form-control add-space" required ref={(input) => this.editedBeginningDate = input} placeholder="Beginning Date" />
                  <div className="input-group-btn">
                    <button type="button" className="btn btn-info btn-width add-space" data-toggle="collapse" href= {href} aria-expanded="false" aria-controls="collapseExample" onClick={this.editBeginningDate}>Beginning Date</button>
                  </div>
                </div>
                <div className="input-group input-group-sm">
                  <input type="date" className="form-control add-space" required ref={(input) => this.editedDueDate = input} placeholder="Due Date" />
                  <div className="input-group-btn">
                    <button type="button" className="btn btn-info btn-width add-space" data-toggle="collapse" href= {href} aria-expanded="false" aria-controls="collapseExample" onClick={this.editDueDate}>Due Date</button>
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
      dispatch(deleteProject(id))
    },
    onDescriptionUpdate: project => {
      dispatch(updateProjectDescription(project))
    },
    onBeginningDateUpdate: project => {
      dispatch(updateBeginningDate(project))
    },
    onDueDateUpdate: project => {
      dispatch(updateDueDate(project))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageProjects);
