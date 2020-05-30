import React from 'react'
import { connect } from 'react-redux'
import { StyledUserCard, UserName, UserTitle, UserNickname } from './user-card-styles'

type TAddress = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: number
    lng: number
  }
}

type TCompany = {
  name: string
  catchPhrase: string
  bs: string
}

export type TUser = {
  id: number
  name: string
  username: string
  email: string
  address: TAddress
  phone: string
  website: string
  company: TCompany
}

export interface IUserCard {
  user: TUser
}

export const UserCard: React.FC<IUserCard> = ({ user }) => {
  return (
    <StyledUserCard>
      <UserTitle>
        <UserName>{user.name}</UserName>
        <UserNickname>@{user.username}</UserNickname>
      </UserTitle>
    </StyledUserCard>
  )
}

export default connect(null, {})(UserCard)
