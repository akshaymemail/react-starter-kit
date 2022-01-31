import { combineReducers } from 'redux'
import { todoReducer } from './todo/reducers'

const reducers = combineReducers({
  todo: todoReducer,
})

export default reducers
