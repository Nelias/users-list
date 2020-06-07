import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { UsersList } from '../users-list/users-list'
import { TUser } from '../user-card/user-card'
import { fetchUsers } from '../../store/actions/users'
import { Content, Title, Spinner, ErrorMessage, NetworkError } from './main-styles'
import { TRootState } from '../../store/reducers/index'

export const Main: React.FC<{}> = () => {
  const dispatch = useDispatch()
  const { usersList, areUsersLoading, usersErrorMessage } = useSelector(
    (state: TRootState) => state.users
  )
  const phrase = useSelector((state: TRootState) => state.search.phrase?.toLowerCase())

  React.useEffect(() => {
    fetchUsers(dispatch)
  }, [dispatch])

  return (
    <Content>
      {areUsersLoading && <Spinner src={`${process.env.PUBLIC_URL}/spinner.svg`} alt="spinner" />}

      {!areUsersLoading && usersErrorMessage !== null && (
        <NetworkError>
          <ErrorMessage>{usersErrorMessage}</ErrorMessage>
        </NetworkError>
      )}

      {!areUsersLoading && !usersErrorMessage && usersList?.length > 0 && (
        <>
          <Title>Users List</Title>
          <UsersList
            users={usersList.filter((user: TUser) => {
              return phrase
                ? user.name.toLowerCase().includes(phrase) ||
                    user.username.toLowerCase().includes(phrase)
                : true
            })}
          />
        </>
      )}
    </Content>
  )
}

export default Main
