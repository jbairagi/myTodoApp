import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import './../App.css';

const TODOAddForm = ({dispatch}) => {
  let input
  return(
    <div>
      <form
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
              <input type="text" className="form-control" required ref={node => {input = node}} placeholder="Enter new task here" />
              <div className="input-group-btn">
                <input type="submit" className="btn btn-success add-btn pull-right" value="Add" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default connect()(TODOAddForm);
