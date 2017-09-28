import React from 'react';
import './App.css';

class TODOAddForm extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.onTaskSubmit(this.todoInput.value);
    e.preventDefault();
	}

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-xs-12">
            <div className="input-group input-group-lg add-space">
              <input type="text" className="form-control" required ref={(input) => this.todoInput = input} placeholder="Enter new task here" />
              <div className="input-group-btn">
                <input type="submit" className="btn btn-success add-btn pull-right"  value="Add" />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default TODOAddForm;





// <form className="form-inline add-space" onSubmit={this.handleSubmit}>
//   <div className="form-group">
//     <input type="text" className="form-control" required ref={(input) => this.todoInput = input} placeholder="Enter new task here" />
//   </div>
//   <input type="submit" className="btn btn-success add-btn pull-right"  value="Add" />
// </form>
