import { createSlice } from "@reduxjs/toolkit";
import PREFIXES from "../../prefixes";

const initialState = {
  todo: [],
};
const { NAME } = PREFIXES.TODO;

const todoSlice = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.todo.push(action.payload);
    },
    delete: (state, actions) => {
      const index = state.todo.findIndex((obj) => obj.id === actions.payload);
      // remove the item
      if (index !== -1) {
        state.todo.splice(index, 1); // Remove object at index
      }
    },
  },
});

export default todoSlice;
