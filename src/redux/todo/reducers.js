import TYPES from "./types";
const initialState = {
  todoList: localStorage.getItem("todoList")
    ? JSON.parse(localStorage.getItem("todoList"))
    : []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_TODO:
      return {
        todoList: action.payload
      };
    case TYPES.DELETE_TODO:
      return {
        todoList: action.payload
      };
    default:
      return state;
  }
};

export default todoReducer;
