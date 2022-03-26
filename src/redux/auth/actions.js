import * as Actions from './types'
export const loginAction =
  ({ email, password }) =>
  (dispatch) => {
    dispatch({ type: Actions.LOGIN_REQUEST })
    setTimeout(() => {
      const token = 'fake-jwt-token'
      const user = { email }
      localStorage.setItem('token', JSON.stringify(token))
      localStorage.setItem('user', JSON.stringify(user))
      dispatch({
        type: Actions.LOGIN_SUCCESS,
        payload: { token, user },
      })
    }, [])
  }

export const logOutAction = () => (dispatch) => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  dispatch({ type: Actions.USER_SIGN_OUT })
}
