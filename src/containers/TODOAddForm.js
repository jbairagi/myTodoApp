import React from 'react';
import { connect } from 'react-redux'
// import { addTodo } from '../actions'
import {request} from './../helpers/fetchHelpers';
import './../App.css';

const TODOAddForm = ({dispatch}) => {
  let title, description, beginningDate, dueDate, developer
  return(
    <div>
      <form className="form-inline"
        onSubmit={e => {
          e.preventDefault()
          if (!title.value.trim() || !description.value.trim() || !beginningDate.value.trim() || !dueDate.value.trim() || !developer.value.trim()) {
            return
          }
          const token= window.localStorage.getItem('token') 
          const body = 'title='+title.value + '&description=' + description.value + '&beginningDate=' + beginningDate.value + '&dueDate='+ dueDate.value + '&developer=' + developer.value
          request('addProjects', 'post', body, token)
          .then( (result) => {

            console.log(result);
            // dispatch(addTodo(result.title))
            
          })
          .catch( (error) => {  
            console.log(error);  
          });
        
          title.value = ''
          description.value = ''
          beginningDate.value = ''
          dueDate.value = ''
          developer.value = ''
        }}
      >
        <div className="row">
          <div className="col-xs-12">
            <div className="input-group input-group-lg add-space">
              <div className="form-group">
                <input type="text" className="form-control" required ref={node => {title = node}} placeholder="Project title" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" required ref={node => {description = node}} placeholder="Project Description" />
              </div>
              <div className="form-group">
                <input type="date" className="form-control" required ref={node => {beginningDate = node}} placeholder="Beginning Date" />
              </div>
              <div className="form-group">
                <input type="date" className="form-control" required ref={node => {dueDate = node}} placeholder="Due Date" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" required ref={node => {developer = node}} placeholder="Developer" />
              </div>
              <input type="submit" className="btn btn-success add-btn" value="Add" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default connect()(TODOAddForm);
