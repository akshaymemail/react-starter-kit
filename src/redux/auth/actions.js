import USERS from '../../fake-db/users'
import * as Actions from './types'
export const loginAction =
  ({ email, password }) =>
  (dispatch) => {
    dispatch({ type: Actions.LOGIN_REQUEST })
    setTimeout(() => {
      const user = USERS.find((u) => u.email === email)
      if (user) {
        if (user.password === password) {
          const token = 'fake-jwt-token'
          const user = { email }
          localStorage.setItem('token', JSON.stringify(token))
          localStorage.setItem('user', JSON.stringify(user))
          dispatch({
            type: Actions.LOGIN_SUCCESS,
            payload: { token, user },
          })
        } else {
          dispatch({
            type: Actions.LOGIN_FAILURE,
            payload: 'Invalid password',
          })
        }
      } else {
        dispatch({
          type: Actions.LOGIN_FAILURE,
          payload: 'Invalid email or password',
        })
      }
    }, 3000)
  }

export const logOutAction = () => (dispatch) => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  dispatch({ type: Actions.USER_SIGN_OUT })
}
