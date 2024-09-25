import { combineReducers } from "redux";
import authSlice from "./features/auth/slice";
import todoSlice from "./features/todo/todoSlice";

const reducers = combineReducers({
  auth: authSlice.reducer,
  todo: todoSlice.reducer,
});

export default reducers;
