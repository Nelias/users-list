import React from 'react'
import { connect } from 'react-redux'
import { StyledUsers } from './users-list-styles'
import { TUser, UserCard } from '../user-card/user-card'
import { ErrorMessage } from '../main/main-styles'

interface IUsersList {
  users: TUser[]
}

export const UsersList: React.FC<IUsersList> = ({ users }) => {
  return (
    <StyledUsers>
      {users.length ? (
        users.map((user: TUser) => <UserCard key={user.id} user={user} />)
      ) : (
        <ErrorMessage>There are no results for your search!</ErrorMessage>
      )}
    </StyledUsers>
  )
}

export default connect(null, {})(UsersList)
