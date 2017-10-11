export const addTodo = project => {
  return {
    type: 'ADD_TODO',
    id: project._id,
    title: project.title
  }
}

export const getAllProjects = project => {
  return {
    type: 'GET_ALL_PROJECTS',
    id: project._id,
    title: project.title
  }
}

export const updateTodo = todo => {
  return {
    type: 'UPDATE_TODO',
    todo
  }
}

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const clearStore = () => {
  return {
    type: 'CLEAR_STORE'
  }
}


export const setLoginStatus = isLoggedIn => {
  return {
    type: 'SET_LOGIN_STATUS',
    isLoggedIn
  }
}

export const setUser = user => {
  return {
    type: 'SET_USER',
    user
  }
}

export const setUserRole = isRoleManager => {
  return {
    type: 'SET_USER_ROLE',
    isRoleManager
  }
}