import Constants from "../../constants";
import USERS from "../../db/users";
import TYPES from "./types.js";
class AuthActions {
  static login =
    ({ email, password }) =>
    (dispatch) => {
      dispatch({ type: TYPES.LOGIN_REQUEST });
      setTimeout(() => {
        const user = USERS.find((u) => u.email === email);
        if (user) {
          if (user.password === password) {
            const token = "fake-jwt-token";
            const user = { email };
            localStorage.setItem(
              Constants.AUTH.ACCESS_TOKEN,
              JSON.stringify(token)
            );
            localStorage.setItem(
              Constants.AUTH.USER_DATA,
              JSON.stringify(user)
            );
            dispatch({
              type: TYPES.LOGIN_SUCCESS,
              payload: { token, user }
            });
          } else {
            dispatch({
              type: TYPES.LOGIN_FAILURE,
              payload: "Invalid password"
            });
          }
        } else {
          dispatch({
            type: TYPES.LOGIN_FAILURE,
            payload: "Invalid email or password"
          });
        }
      }, 3000);
    };
  static logout = () => (dispatch) => {
    localStorage.removeItem(Constants.AUTH.ACCESS_TOKEN);
    localStorage.removeItem(Constants.AUTH.USER_DATA);
    dispatch({ type: TYPES.USER_SIGN_OUT });
  };
}
export default AuthActions;
