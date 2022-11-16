import USERS from '../../db/users'
import * as Types from './types'
export const loginAction =
  ({ email, password }) =>
  (dispatch) => {
    dispatch({ type: Types.LOGIN_REQUEST })
    setTimeout(() => {
      const user = USERS.find((u) => u.email === email)
      if (user) {
        if (user.password === password) {
          const token = 'fake-jwt-token'
          const user = { email }
          localStorage.setItem('token', JSON.stringify(token))
          localStorage.setItem('user', JSON.stringify(user))
          dispatch({
            type: Types.LOGIN_SUCCESS,
            payload: { token, user },
          })
        } else {
          dispatch({
            type: Types.LOGIN_FAILURE,
            payload: 'Invalid password',
          })
        }
      } else {
        dispatch({
          type: Types.LOGIN_FAILURE,
          payload: 'Invalid email or password',
        })
      }
    }, 3000)
  }

export const logOutAction = () => (dispatch) => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  dispatch({ type: Types.USER_SIGN_OUT })
}
