import { Dispatch } from 'redux'

import * as actionTypes from './types'

export const fetchUsers = (dispatch: Dispatch<actionTypes.UsersActionTypes>) => {
  dispatch({ type: actionTypes.USERS_FETCH_REQUESTED, payload: null })
}
