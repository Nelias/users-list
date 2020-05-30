import styled from 'styled-components'

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 100vh;
  background: #222;
  margin: 45px 0 0 0;
  overflow: hidden;

  color: white;
`

export const Title = styled.h1`
  margin: 40px 0 0 0;
  color: #181818;
  text-shadow: -1px -1px 0 #ae8625, 1px -1px 0 #f7ef8a, -1px 1px 0 #ae8625, 1px 1px 0 #f7ef8a;
`

export const Spinner = styled.img`
  margin: 0 auto;
  height: 90vh;

  width: 130px;
`

export const ErrorMessage = styled.div`
  margin: 10px 0;
  border: 1px solid #ae2525;
  padding: 15px 15px 17px;
  border-radius: 10px;

  font-size: 17px;
  color: #ddd;
`

export const NetworkError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;
  height: 90vh;
`
