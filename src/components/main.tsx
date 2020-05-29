import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

interface MainProps {}

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

export const Main: React.FC<MainProps> = () => {
  return <Content></Content>
}

const mapStateToProps = (state: any) => {
  const { users, areUsersLoading } = state.users

  return {
    users,
    areUsersLoading,
  }
}

export default connect(mapStateToProps, {})(Main)
