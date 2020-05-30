import { combineReducers } from 'redux'
import usersFetchReducer from './users'
import searchPhraseReducer from './search'

export default combineReducers({
  users: usersFetchReducer,
  search: searchPhraseReducer,
})
