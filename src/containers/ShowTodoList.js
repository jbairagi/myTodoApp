import { connect } from 'react-redux'
import TODOList from './../components/TODOList'

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const ShowTodoList = connect(
  mapStateToProps
)(TODOList)

export default ShowTodoList
