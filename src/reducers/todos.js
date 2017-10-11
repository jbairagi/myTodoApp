const initialStateUser = {
  allProjects: [], 
  userProjects: []
}

const todos = (state = initialStateUser, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const userProjects = {
        ...state,
        userProjects: [
          ...state.userProjects,
          {
            id: action.id,
            title: action.title,
            description: action.description,
            beginningDate: action.beginningDate,
            dueDate: action.dueDate
          }
        ]
      };
      return userProjects;
    
    case 'GET_ALL_PROJECTS':
      const allProjects = {
        ...state,
        allProjects: [
          ...state.allProjects,
          {
            id: action.id,
            title: action.title,
            description: action.description,
            beginningDate: action.beginningDate,
            dueDate: action.dueDate
          }
        ]
      };
      return allProjects;

    case 'UPDATE_DESCRIPTION':
      const allProjectsArrayU = state.allProjects.map(todo =>
        (todo.id === action.todo.id)
        ? {...todo, description: action.todo.description}
        : todo)
      
      const userProjectsArrayU = state.userProjects.map(todo =>
        (todo.id === action.todo.id)
        ? {...todo, description: action.todo.description}
        : todo)

      const finalStateU = {
        ...state,
        allProjects: allProjectsArrayU,
        userProjects: userProjectsArrayU
      }
      return finalStateU

    case 'UPDATE_BEGINNING_DATE':
      const allProjectsArrayB = state.allProjects.map(todo =>
        (todo.id === action.todo.id)
        ? {...todo, beginningDate: action.todo.beginningDate}
        : todo)
      
      const userProjectsArrayB = state.userProjects.map(todo =>
        (todo.id === action.todo.id)
        ? {...todo, beginningDate: action.todo.beginningDate}
        : todo)

      const finalStateB = {
        ...state,
        allProjects: allProjectsArrayB,
        userProjects: userProjectsArrayB
      }
      return finalStateB

    case 'UPDATE_DUE_DATE':
      const allProjectsArrayDD = state.allProjects.map(todo =>
        (todo.id === action.todo.id)
        ? {...todo, dueDate: action.todo.dueDate}
        : todo)
      
      const userProjectsArrayDD = state.userProjects.map(todo =>
        (todo.id === action.todo.id)
        ? {...todo, dueDate: action.todo.dueDate}
        : todo)

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

export default todos
