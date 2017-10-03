const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]

    case 'UPDATE_TODO':
    return state.map(todo =>
      (todo.id === action.todo.id)
        ? {...todo, text: action.todo.text}
        : todo
    )

    case 'DELETE_TODO':
      state = state.filter(function (e) {
        return e.id !== action.id;
      });
      return state

    default:
      return state
  }
}

export default todos
