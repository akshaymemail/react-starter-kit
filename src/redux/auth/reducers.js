import * as Types from './types'
const initialState = {
  loading: false,
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {},
  token: localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : null,
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        loading: true,
      }
    case Types.LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
      }
    case Types.LOGIN_FAILURE:
      return {
        loading: false,
        error: action.payload,
      }
    case Types.USER_SIGN_OUT:
      return {
        loading: false,
        token: null,
        user: null,
      }
    default:
      return state
  }
}
