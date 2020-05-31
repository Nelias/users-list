import React from 'react'
import { StyledUsersList } from './users-list-styles'
import UserCard, { TUser } from '../user-card/user-card'
import { ErrorMessage } from '../main/main-styles'

interface IUsersList {
  users: TUser[]
}

export const UsersList: React.FC<IUsersList> = ({ users }) => {
  return (
    <StyledUsersList>
      {users.length ? (
        users.map((user: TUser) => <UserCard key={user.id} user={user} />)
      ) : (
        <ErrorMessage>There are no results for your search!</ErrorMessage>
      )}
    </StyledUsersList>
  )
}

export default UsersList
