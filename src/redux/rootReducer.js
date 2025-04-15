import { combineReducers } from "redux";
import authSlice from "./features/auth/slice";
import todoSlice from "./features/todo/todoSlice";

// Define slices object once
const slices = {
  auth: authSlice,
  todo: todoSlice,
};

// Create reducers object from slices
const reducers = Object.fromEntries(
  Object.entries(slices).map(([key, slice]) => [key, slice.reducer])
);

// Get initial state from slices
const getInitialState = () =>
  Object.fromEntries(
    Object.entries(slices).map(([key, slice]) => [key, slice.getInitialState()])
  );

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  if (action.type === slices.auth.actions.logout.type) {
    // if logout action dispatched cleanup redux and localstorage
    localStorage.clear();
    return getInitialState();
  }
  return appReducer(state, action);
};

export default rootReducer;
