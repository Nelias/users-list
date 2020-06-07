import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers } from '../../store/actions/users'
import { TRootState } from '../../store/reducers/index'
import { UsersList } from '../users-list/users-list'
import { TUser } from '../user-card/user-card'

import { Content, Title, Spinner, ErrorMessage, NetworkError } from './main-styles'

export const Main: React.FC<{}> = () => {
  const dispatch = useDispatch()
  const { usersList, areUsersLoading, usersErrorMessage } = useSelector(
    (state: TRootState) => state.users
  )
  const phrase = useSelector((state: TRootState) => state.search.phrase?.toLowerCase())

  React.useEffect(() => {
    fetchUsers(dispatch)
  }, [dispatch])

  const filteredUsers = React.useMemo(() => {
    return usersList.filter((user: TUser) =>
      phrase ? user.name.toLowerCase().includes(phrase) : true
    )
  }, [usersList, phrase])

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
          <UsersList users={filteredUsers} />
        </>
      )}
    </Content>
  )
}

export default Main
