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
      console.log(state);
      const temp = state.allProjects.map(todo =>
                      (todo.id === action.todo.id)
                      ? {...todo, title: action.todo.title}
                      : todo)
      console.log(">>>>>>>>>>>>>>>>>>>>>>")
      console.log(temp);
      return temp
      

    case 'DELETE_TODO':
      state = state.allProjects.filter(function (e) {
        return e.id !== action.id;
      });
      return state
    
    case 'CLEAR_STORE':
      state=null;
      return state

    default:
      return state
  }
}

export default todos
