import { combineReducers } from 'redux'
import usersFetchReducer from './users'

export default combineReducers({
  users: usersFetchReducer,
})
