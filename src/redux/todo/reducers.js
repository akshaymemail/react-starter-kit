import * as types from './types'
const initialState = {
  todoList: localStorage.getItem('todoList')
    ? JSON.parse(localStorage.getItem('todoList'))
    : [],
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        todoList: action.payload,
      }
    case types.DELETE_TODO:
      return {
        todoList: action.payload,
      }
    default:
      return state
  }
}
