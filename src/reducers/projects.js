const initialStateUser = {
  allProjects: [], 
  userProjects: []
}

const projects = (state = initialStateUser, action) => {
  switch (action.type) {
    case 'ADD_PROJECTS':
      action.projects.map(project => {
        let beginningDate = new Date(project.beginningDate)
        let dueDate = new Date(project.dueDate)
        project.beginningDate = beginningDate.toISOString().slice(0,10)
        project.dueDate = dueDate.toISOString().slice(0,10)
      })
      const userProjectsTemp = {
        ...state,
        // userProjects: action.projects
        userProjects: action.projects
      };
      console.log(userProjectsTemp)
      return userProjectsTemp;

    case 'ADD_PROJECT':
      console.log(action)
      const check = action.check
      const allProjectsP= [
        ...state.allProjects,
        {
          id: action.id,
          title: action.title,
          description: action.description,
          beginningDate: action.beginningDate,
          dueDate: action.dueDate
        }
      ]
      const userProjectsP = state.userProjects
      if(check){
        const userProjectsP = [
          ...state.userProjects,
          {
            _id: action._id,
            title: action.title,
            description: action.description,
            beginningDate: action.beginningDate,
            dueDate: action.dueDate
          }
        ]
      }
      const finalStateP = {
        ...state,
        allProjects: allProjectsP,
        userProjects: userProjectsP
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
