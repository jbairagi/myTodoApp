export const login = userCredentials => {
  return {
    type: 'LOGIN',
    userCredentials
  }
}

export const projects = () => {
  return {
    type: 'PROJECT'
  }
}

export const addNewProject = (projectInfo) => {
  return {
    type: 'ADD_PROJECT',
    projectInfo
  }
}

export const updateProjectDescription = Project => {
  return {
    type: 'UPDATE_DESCRIPTION',
    Project
  }
}

export const updateBeginningDate= Project => {
  return {
    type: 'UPDATE_BEGINNING_DATE',
    Project
  }
}

export const updateDueDate = Project => {
  return {
    type: 'UPDATE_DUE_DATE',
    Project
  }
}

export const deleteProject = (id, projectInfo) => {
  return {
    type: 'REMOVE_PROJECT',
    id,
    projectInfo
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