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
            title: action.title
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
            title: action.title
          }
        ]
      };
      return allProjects;

    case 'UPDATE_TODO':
      const allProjectsArrayU = state.allProjects.map(todo =>
        (todo.id === action.todo.id)
        ? {...todo, title: action.todo.title}
        : todo)
      
      const userProjectsArrayU = state.userProjects.map(todo =>
        (todo.id === action.todo.id)
        ? {...todo, title: action.todo.title}
        : todo)

      const finalStateU = {
        ...state,
        allProjects: allProjectsArrayU,
        userProjects: userProjectsArrayU
      }
      return finalStateU
      

    case 'DELETE_TODO':
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
