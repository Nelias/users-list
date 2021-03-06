import { call, put, takeLatest } from 'redux-saga/effects'

import { fetchUsersData } from './api'
import * as actionTypes from '../actions/types'

function* fetchUsers() {
  try {
    const users = yield call(fetchUsersData)
    yield put({ type: actionTypes.USERS_FETCH_SUCCEEDED, payload: { users } })
  } catch (error) {
    yield put({ type: actionTypes.USERS_FETCH_FAILED })
  }
}

function* usersSaga() {
  yield takeLatest(actionTypes.USERS_FETCH_REQUESTED, fetchUsers)
}

export default usersSaga
