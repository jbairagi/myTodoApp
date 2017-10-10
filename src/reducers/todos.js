const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          title: action.title
        }
      ]

    case 'UPDATE_TODO':
      return state.map(todo =>
        (todo.id === action.todo.id)
          ? {...todo, title: action.todo.title}
          : todo
      )

    case 'DELETE_TODO':
      state = state.filter(function (e) {
        return e.id !== action.id;
      });
      return state
    
    case 'CLEAR_STORE':
      state=[];
      return state

    default:
      return state
  }
}

export default todos
