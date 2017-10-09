import { combineReducers } from 'redux'
import todos from './todos'
import userLogin from './userLogin'

const todoApp = combineReducers({
  todos,
  userLogin
})

export default todoApp
