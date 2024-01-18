import TYPES from "./types";

class TodoActions {
  static add = (newTodo) => (dispatch, getState) => {
    const { todoList } = getState().todo;
    localStorage.setItem("todoList", JSON.stringify([...todoList, newTodo]));
    dispatch({ type: TYPES.ADD_TODO, payload: [newTodo, ...todoList] });
  };
  static delete = (id) => (dispatch, getState) => {
    const { todoList } = getState().todo;
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    dispatch({ type: TYPES.DELETE_TODO, payload: newTodoList });
  };
}
export default TodoActions;
