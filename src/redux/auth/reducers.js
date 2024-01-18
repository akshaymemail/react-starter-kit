import Constants from "../../constants";
import TYPES from "./types";
const initialState = {
  loading: false,
  user: localStorage.getItem(Constants.AUTH.USER_DATA)
    ? JSON.parse(localStorage.getItem(Constants.AUTH.USER_DATA))
    : {},
  token: localStorage.getItem(Constants.AUTH.ACCESS_TOKEN)
    ? JSON.parse(localStorage.getItem(Constants.AUTH.ACCESS_TOKEN))
    : null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGIN_REQUEST:
      return {
        loading: true
      };
    case TYPES.LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload.user,
        token: action.payload.token
      };
    case TYPES.LOGIN_FAILURE:
      return {
        loading: false,
        error: action.payload
      };
    case TYPES.USER_SIGN_OUT:
      return {
        loading: false,
        token: null,
        user: null
      };
    default:
      return state;
  }
};

export default loginReducer;
