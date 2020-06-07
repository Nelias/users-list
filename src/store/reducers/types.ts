import { TUser } from '../../components/user-card/user-card'

export type TUsersErrorMessage = null | string

export type TUsersList = [] | TUser[]

export type TPhrase = null | string

export interface IUsersState {
  areUsersLoading: boolean
  usersErrorMessage: TUsersErrorMessage
  usersList: TUsersList
}

export interface ISearchState {
  phrase: TPhrase
}
