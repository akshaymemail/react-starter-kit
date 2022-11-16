import Constants from '../../constants'
import * as Types from './types'
const initialState = {
  loading: false,
  user: localStorage.getItem(Constants.AUTH.USER_DATA)
    ? JSON.parse(localStorage.getItem(Constants.AUTH.USER_DATA))
    : {},
  token: localStorage.getItem(Constants.AUTH.ACCESS_TOKEN)
    ? JSON.parse(localStorage.getItem(Constants.AUTH.ACCESS_TOKEN))
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
