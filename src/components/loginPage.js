import React from 'react';
import './../App.css';
import TODOApp from './../components/TODOApp';

class loginPage extends React.Component{
  componentDidMount() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  render(){
    let user
    let pass
    return(
      <div>
        <div show={this.state.showModal} onHide={this.close} className="modal fade in" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Login</h4>
              </div>
              <div className="modal-body">
                {/* <form role="form" method="POST" action=""> */}
                <form
                  onSubmit={e => {
                    e.preventDefault()
                    if (!user.value.trim() || !pass.value.trim()) {
                      return
                    }
                    // console.log(user.value +' ' + pass.value);
                  // routing  and validation will be done here
                    
                  }}
                  >
                  <input type="hidden" name="_token" value="" /> 
                  <div className="form-group">
                    <label className="control-label">Username</label>
                    <div>
                      <input type="text" className="form-control input-lg" required ref={node => {user = node}} placeholder="Username" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label">Password</label>
                    <div>
                      <input type="password" className="form-control input-lg" required ref={node => {pass = node}} placeholder="Password" />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <input type="submit" onClick={this.close} className="btn btn-default" data-dismiss="modal" value="Submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div>
          <TODOApp />
        </div>
      </div>
    );
  }
}


export default loginPage;