import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { UsersList } from '../users-list/users-list'
import { TUser } from '../user-card/user-card'
import { fetchUsers } from '../../store/actions/users'
import { Content, Title, Spinner, ErrorMessage, NetworkError } from './main-styles'

interface MainProps {
  areUsersLoading: boolean
  usersErrorMessage: null | string
  usersList: TUser[]
  searchPhrase: string
}

export const Main: React.FC<MainProps> = ({
  areUsersLoading,
  usersErrorMessage,
  usersList,
  searchPhrase,
}) => {
  const dispatch = useDispatch()

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
              return searchPhrase
                ? user.name.toLowerCase().includes(searchPhrase) ||
                    user.username.toLowerCase().includes(searchPhrase)
                : true
            })}
          />
        </>
      )}
    </Content>
  )
}

const mapStateToProps = (state: any) => {
  const { usersList, usersErrorMessage, areUsersLoading } = state.users
  const searchPhrase = state.search.phrase?.toLowerCase()

  return {
    usersList,
    usersErrorMessage,
    areUsersLoading,
    searchPhrase,
  }
}

export default connect(mapStateToProps, { fetchUsers })(Main)
