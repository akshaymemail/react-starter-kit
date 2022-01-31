import * as types from './types'

export const addTodo = (newTodo) => (dispatch, getState) => {
  const { todoList } = getState().todo
  localStorage.setItem('todoList', JSON.stringify([...todoList, newTodo]))
  dispatch({ type: types.ADD_TODO, payload: [newTodo, ...todoList] })
}

export const deleteTodo = (id) => (dispatch, getState) => {
  const { todoList } = getState().todo
  const newTodoList = todoList.filter((todo) => todo.id !== id)
  localStorage.setItem('todoList', JSON.stringify(newTodoList))
  dispatch({ type: types.DELETE_TODO, payload: newTodoList })
}
