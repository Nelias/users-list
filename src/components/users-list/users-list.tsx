import React from 'react'
import { connect } from 'react-redux'
import { StyledUsers } from './users-list-styles'
import { TUser, UserCard } from '../user-card/user-card'

interface IUsersList {
  users: TUser[]
}

export const UsersList: React.FC<IUsersList> = ({ users }) => {
  return (
    <StyledUsers>
      {users?.map((user: TUser) => (
        <UserCard key={user.id} user={user} />
      ))}
    </StyledUsers>
  )
}

export default connect(null, {})(UsersList)
