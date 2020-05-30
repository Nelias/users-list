import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { UsersList } from '../users-list/users-list'
import { TUser } from '../user-card/user-card'
import { fetchUsers } from '../../store/actions/users'
import { Content, Title } from './main-styles'

interface MainProps {
  users: TUser[]
  searchPhrase: string
}

export const Main: React.FC<MainProps> = ({ users, searchPhrase }) => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    fetchUsers(dispatch)
  }, [dispatch])

  return (
    <Content>
      <Title>Users List</Title>
      <UsersList
        users={users.filter((user: TUser) => {
          return searchPhrase
            ? user.name.toLowerCase().includes(searchPhrase) ||
                user.username.toLowerCase().includes(searchPhrase)
            : true
        })}
      />
    </Content>
  )
}

const mapStateToProps = (state: any) => {
  const { users, areUsersLoading } = state.users
  const searchPhrase = state.search.phrase?.toLowerCase()

  return {
    users,
    areUsersLoading,
    searchPhrase,
  }
}

export default connect(mapStateToProps, { fetchUsers })(Main)
