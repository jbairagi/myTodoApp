import React from 'react';
import ListItems from './ListItems';
import {connect} from 'react-redux';
import { addTodo } from '../actions'

class TODOList extends React.Component{

  componentDidMount(){
    fetch(`http://localhost:3000/projects`, { 
      method: 'post',  
      headers: {  
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
      },  
      body: 'username=cvbnm&password=cvbnm'  
    })
    .then(res => res.json())
    .then(tasks => {
      tasks.forEach(function(element) {
        this.props.dispatch(addTodo(element.title))
      }, this);
    })
    .catch(function (error) {  
      console.log('Request failed', error);  
    });
  }

  render(){
    return (
      <ul className="list-group">
        {
          this.props.todos.map(task => <ListItems task={task.text} taskId={task.id} key={task.id} />)
        }
      </ul>
    );
  }
}


const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
  
export default connect(mapStateToProps)(TODOList);



// fetch(`/projects`, { 
//   method: 'post',  
//   headers: {  
//     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
//   },  
//   body: 'username=cvbnm&password=cvbnm'  
// }).then(res => res.json())
// .catch(function (error) {  
//   console.log('Request failed', error);  
// });