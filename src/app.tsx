import React from 'react'
import TopBar from './components/top-bar/top-bar'
import Main from './components/main'

import { Provider } from 'react-redux'
import store from './store/store'
import './app.css'
import styled from 'styled-components'

const MainWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <TopBar />
        <MainWrapper>
          <Main />
        </MainWrapper>
      </div>
    </Provider>
  )
}

export default App
