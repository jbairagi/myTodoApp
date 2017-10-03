import React from 'react';
import TODOAddForm from './TODOAddForm';
import TODOList from './TODOList';
import AppHead from './AppHead';
import './../App.css';
// import generator from './utility/generator';

const TODOApp = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <AppHead />
        <TODOAddForm />
        <TODOList />
      </div>
    </div>
  </div>
);

export default TODOApp;




// class TODOApp extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       data: this.props.tasks
//     };
//   }
//
//   handleTaskRemoval = (taskId) => {
//     let data = this.state.data;
//     data = data.filter(function (e) {
//       return e.id !== taskId;
//     });
//     this.setState({data : data});
//   }
//
//   handleTaskUpdation = (task, taskId) => {
//     let data = this.state.data;
//     data[data.findIndex((obj => obj.id === taskId))].task = task;
//     this.setState({data : data});
//   }
//
//   handleSubmit = (task) => {
//     let data = this.state.data;
//     let id = generator()+generator()+'-'+generator()+'-'+generator()+'-'+generator();
//     data = data.concat([{id, task}]);
//     this.setState({data : data});
//   }
//
//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-8 col-md-offset-2">
//             <AppHead />
//             <TODOAddForm onTaskSubmit = {this.handleSubmit}
//             />
//             <TODOList tasks={this.state.data} updateTask={this.handleTaskUpdation} removeTask={this.handleTaskRemoval}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
