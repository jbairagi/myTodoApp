// import { combineReducers } from 'redux'
import projects from './projects'
import userLogin from './userLogin'

export default (state = {}, action) => {
  return{
    projects: projects(state.projects, action, state),
    userLogin: userLogin(userLogin.app, action, state)
  };
};

// export default appReducer
