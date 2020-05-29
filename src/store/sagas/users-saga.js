import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchUsersData } from '../api'

function* fetchUser() {
  try {
    const usersData = yield call(fetchUsersData)
    yield put({ type: 'USERS_FETCH_SUCCEEDED', users: usersData })
  } catch (error) {
    yield put({ type: 'USERS_FETCH_FAILED', message: error.message })
  }
}

function* usersSaga() {
  yield takeLatest('USERS_FETCH_REQUESTED', fetchUser)
}

export default usersSaga
