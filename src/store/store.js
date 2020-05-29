import rootReducer from './reducers/index'
import usersSaga from './sagas/users-saga'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(usersSaga)

export default store
