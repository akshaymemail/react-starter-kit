import { combineReducers } from "redux";
import todoReducer from "./todo/reducers";
import loginReducer from "./auth/reducers";

const reducers = combineReducers({
  todo: todoReducer,
  auth: loginReducer
});

export default reducers;
