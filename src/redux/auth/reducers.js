import * as Actions from './types'
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
    case Actions.LOGIN_REQUEST:
      return {
        loading: true,
      }
    case Actions.LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
      }
    case Actions.LOGIN_FAILURE:
      return {
        loading: false,
        error: action.payload,
      }
    case Actions.USER_SIGN_OUT:
      return {
        loading: false,
        token: null,
        user: null,
      }
    default:
      return state
  }
}
