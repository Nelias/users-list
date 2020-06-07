import { combineReducers } from 'redux'

import usersFetchReducer from './users'
import searchPhraseReducer from './search'

const rootReducer = combineReducers({
  users: usersFetchReducer,
  search: searchPhraseReducer,
})

export type TRootState = ReturnType<typeof rootReducer>

export default rootReducer
