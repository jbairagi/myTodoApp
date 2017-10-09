import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import './../App.css';

const TODOAddForm = ({dispatch}) => {
  let input
  return(
    <div>
      <form className="form-inline"
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <div className="row">
          <div className="col-xs-12">
            <div className="input-group input-group-lg add-space">
              <div className="form-group">
                <input type="text" className="form-control" required ref={node => {input = node}} placeholder="Project title" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" required placeholder="Project Description" />
              </div>
              <div className="form-group">
                <input type="date" className="form-control" required placeholder="Beginning Date" />
              </div>
              <div className="form-group">
                <input type="date" className="form-control" required placeholder="Due Date" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" required placeholder="Developer" />
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
