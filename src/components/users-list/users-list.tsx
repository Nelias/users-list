import React from 'react'
import { connect } from 'react-redux'
import { StyledUsers } from './users-list-styles'
import { TUser, User } from '../user/user'

interface IUsersList {
  users: TUser[]
}

export const UsersList: React.FC<IUsersList> = ({ users }) => {
  return (
    <StyledUsers>
      {users?.map((user: TUser) => (
        <User key={user.id} user={user}></User>
      ))}
    </StyledUsers>
  )
}

export default connect(null, {})(UsersList)
