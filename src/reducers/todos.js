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
        ? {...todo, task: action.todo.text}
        : todo
    )

    case 'DELETE_TODO':
      state = state.filter(function (e) {
        return e.id !== action.id;
      });
      return state

      // return state.map(todo =>
      //   (todo.id === action.id)
      //     ? {...todo, completed: !todo.completed}
      //     : todo
      // )

    default:
      return state
  }
}

export default todos


handleTaskRemoval = (taskId) => {
  let data = this.state.data;
  data = data.filter(function (e) {
    return e.id !== taskId;
  });
  this.setState({data : data});
}
