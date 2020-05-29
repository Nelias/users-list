import React from 'react'
import { connect } from 'react-redux'

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

export interface IUser {
  user: TUser
}

export const User: React.FC<IUser> = ({ user }) => {
  return (
    <div>
      <p>
        {user.name} - @{user.username}
      </p>
    </div>
  )
}

export default connect(null, {})(User)
