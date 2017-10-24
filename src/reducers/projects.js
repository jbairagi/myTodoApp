const initialStateUser = {
  allProjects: [], 
  userProjects: []
}

const projects = (state = initialStateUser, action, root) => {
  switch (action.type) {
    case 'GET_USER_PROJECTS':
      let beginningDate
      let dueDate
      action.projects.map(project => {
        return (
          beginningDate = new Date(project.beginningDate),
          dueDate = new Date(project.dueDate),
          project.beginningDate = beginningDate.toISOString().slice(0,10),
          project.dueDate = dueDate.toISOString().slice(0,10)
        )
      })
      const userProjectsTemp = {
        ...state,
        userProjects: action.projects
      };
      return userProjectsTemp;

    case 'SET_NEW_PROJECT':
      beginningDate = new Date(action.response.project.beginningDate)
      dueDate = new Date(action.response.project.dueDate)
      beginningDate = beginningDate.toISOString().slice(0,10)
      dueDate = dueDate.toISOString().slice(0,10)
        
      let project = {
              _id: action.response.project._id,
              title: action.response.project.title,
              description: action.response.project.description,
              beginningDate: beginningDate,
              dueDate: dueDate
            }
      const allProjectsArrayP = [
        ...state.allProjects,
        project
      ]

      const finalStateP = {
        ...state,
        allProjects: allProjectsArrayP
      }

      if (root.userLogin.user === action.response.developer){
        const userProjectsArrayP = [
          ...state.userProjects,
          project
        ]
        finalStateP.userProjects = userProjectsArrayP
      }
      return finalStateP
  
    case 'GET_ALL_PROJECTS':
      const allProjects = {
        ...state,
        allProjects: action.projects
      };
      return allProjects;

    case 'UPDATE_DESCRIPTION':
      const allProjectsArrayU = state.allProjects.map(project =>
        (project.id === action.Project.id)
        ? {...project, description: action.Project.description}
        : project)
      
      const userProjectsArrayU = state.userProjects.map(project =>
        (project.id === action.Project.id)
        ? {...project, description: action.Project.description}
        : project)

      const finalStateU = {
        ...state,
        allProjects: allProjectsArrayU,
        userProjects: userProjectsArrayU
      }
      return finalStateU

    case 'UPDATE_BEGINNING_DATE':
      const allProjectsArrayB = state.allProjects.map(project =>
        (project.id === action.Project.id)
        ? {...project, beginningDate: action.Project.beginningDate}
        : project)
      
      const userProjectsArrayB = state.userProjects.map(project =>
        (project.id === action.Project.id)
        ? {...project, beginningDate: action.Project.beginningDate}
        : project)

      const finalStateB = {
        ...state,
        allProjects: allProjectsArrayB,
        userProjects: userProjectsArrayB
      }
      return finalStateB

    case 'UPDATE_DUE_DATE':
      const allProjectsArrayDD = state.allProjects.map(project =>
        (project.id === action.Project.id)
        ? {...project, dueDate: action.Project.dueDate}
        : project)
      
      const userProjectsArrayDD = state.userProjects.map(project =>
        (project.id === action.Project.id)
        ? {...project, dueDate: action.Project.dueDate}
        : project)

      const finalStateDD = {
        ...state,
        allProjects: allProjectsArrayDD,
        userProjects: userProjectsArrayDD
      }
      return finalStateDD
      

    case 'DELETE_PROJECT':
      const allProjectsArrayD = state.allProjects.filter(function (e) {
        return e.id !== action.id;
      });

      const userProjectsArrayD = state.userProjects.filter(function (e) {
        return e.id !== action.id;
      });

      const finalStateD = {
        ...state,
        allProjects: allProjectsArrayD,
        userProjects: userProjectsArrayD
      }
      return finalStateD

    case 'CLEAR_STORE':
      return {allProjects:[], userProjects:[]}

    default:
      return state
  }
}

export default projects
