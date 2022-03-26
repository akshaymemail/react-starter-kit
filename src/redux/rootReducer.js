import { combineReducers } from 'redux'
import { loginReducer } from './auth/reducers'
import { todoReducer } from './todo/reducers'

const reducers = combineReducers({
  todo: todoReducer,
  auth: loginReducer,
})

export default reducers
