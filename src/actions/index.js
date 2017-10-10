import generator from './../utility/generator';

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: generator(),
    text
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

export const clearList = id => {
  return {
    type: 'CLEAR_LIST'
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