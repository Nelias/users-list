import * as actionTypes from './actionTypes'

export const fetchUsers = (dispatch) => {
  dispatch({ type: actionTypes.USERS_FETCH_REQUESTED, payload: null })
}
