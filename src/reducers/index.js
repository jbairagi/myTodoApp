import { combineReducers } from 'redux'
import projects from './projects'
import userLogin from './userLogin'

const appReducer = combineReducers({
  projects,
  userLogin
})

export default appReducer
