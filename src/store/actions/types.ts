import { TPhrase, TUsersErrorMessage, TUsersList } from '../reducers/types'

export const USERS_FETCH_SUCCEEDED = 'USERS_FETCH_SUCCEEDED'
export const USERS_FETCH_FAILED = 'USERS_FETCH_FAILED'
export const USERS_FETCH_REQUESTED = 'USERS_FETCH_REQUESTED'
export const SET_SEARCH_PHRASE = 'SET_SEARCH_PHRASE'

interface SearchAction {
  type: typeof SET_SEARCH_PHRASE
  phrase: TPhrase
}

interface UsersSucceededAction {
  type: typeof USERS_FETCH_SUCCEEDED
  payload: { users: { data: TUsersList } }
}

interface UsersFailedAction {
  type: typeof USERS_FETCH_FAILED
  payload: TUsersErrorMessage
}

interface UsersRequestedAction {
  type: typeof USERS_FETCH_REQUESTED
  payload: null
}

export type SearchActionTypes = SearchAction
export type UsersActionTypes = UsersSucceededAction | UsersFailedAction | UsersRequestedAction
