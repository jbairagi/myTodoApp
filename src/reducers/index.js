import { combineReducers } from 'redux'
import projects from './projects'
import userLogin from './userLogin'

const projectApp = combineReducers({
  projects,
  userLogin
})

export default projectApp
