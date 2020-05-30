import React from 'react'
import { connect, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { UsersList } from '../users-list/users-list'
import { TUser } from '../user-card/user-card'
import { fetchUsers } from '../../store/actions/users'

interface MainProps {
  users: TUser[]
}

export const Content = styled.main`
  background: #222;
  color: white;
  width: 100%;
  align-items: center;
  margin-top: 45px;
  padding-bottom: 100px;
  overflow: hidden;

  a {
    color: white;
    text-decoration: none;
  }
`

export const Title = styled.h1`
  margin: 40px 0 0 0;
  color: #222;
  text-shadow: -1px -1px 0 #ae8625, 1px -1px 0 #f7ef8a, -1px 1px 0 #ae8625, 1px 1px 0 #f7ef8a;
`

export const Main: React.FC<MainProps> = ({ users }) => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    fetchUsers(dispatch)
  }, [dispatch])

  console.log(users)

  return (
    <Content>
      <Title>Users List</Title>
      <UsersList users={users}></UsersList>
    </Content>
  )
}

const mapStateToProps = (state: any) => {
  const { users, areUsersLoading } = state.users

  return {
    users,
    areUsersLoading,
  }
}

export default connect(mapStateToProps, { fetchUsers })(Main)
