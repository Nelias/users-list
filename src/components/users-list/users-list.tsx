import React from 'react'
import { connect } from 'react-redux'
import { StyledUsers, SearchError } from './users-list-styles'
import { TUser, UserCard } from '../user-card/user-card'

interface IUsersList {
  users: TUser[]
}

export const UsersList: React.FC<IUsersList> = ({ users }) => {
  return (
    <StyledUsers>
      {users.length ? (
        users.map((user: TUser) => <UserCard key={user.id} user={user} />)
      ) : (
        <SearchError>There are no results for your search!</SearchError>
      )}
    </StyledUsers>
  )
}

export default connect(null, {})(UsersList)
