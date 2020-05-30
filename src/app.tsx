import React from 'react'
import TopBar from './components/top-bar/top-bar'
import Main from './components/main/main'

import { Provider } from 'react-redux'
import store from './store/store'
import './app.css'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <TopBar />
        <Main />
      </div>
    </Provider>
  )
}

export default App
