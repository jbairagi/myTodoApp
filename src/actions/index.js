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

export const addProjects = projects => {
  console.log(">>>>>>>>>>>>>>>>>>>>>")
  console.log(projects)
  return {
    type: 'ADD_PROJECTS',
    projects
  }
}

export const addProject = (project, check) => {
  console.log(">>>>>>>>>>>>>>>>>>>>>")
  console.log(project)
  let beginningDate = new Date(project.beginningDate)
  let dueDate = new Date(project.dueDate)
  return {
    type: 'ADD_PROJECT',
    _id: project._id,
    title: project.title,
    description: project.description,
    beginningDate: beginningDate.toISOString().slice(0,10),
    dueDate: dueDate.toISOString().slice(0,10),
    check
  }
}

export const getAllProjects = projects => {
  return {
    type: 'GET_ALL_PROJECTS',
    projects
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

export const deleteProject = _id => {
  return {
    type: 'DELETE_PROJECT',
    _id
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