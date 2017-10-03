import generator from './../utility/generator';

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: generator(),
    text
  }
}

export const updateTodo = todo => {
  return {
    type: 'UPDATE_TODO',
    todo
  }
}

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id
  }
}
