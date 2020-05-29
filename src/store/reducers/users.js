import * as actionTypes from '../actions/actionTypes'

const initialState = {
  users: [{ id: 1, name: 'Frank' }],
  areUsersLoading: false,
}

export default function usersFetchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USERS_FETCH_REQUESTED: {
      return {
        ...state,
        areUsersLoading: true,
      }
    }

    case actionTypes.USERS_FETCH_SUCCEEDED: {
      return {
        ...state,
        users: action.payload.users.data,
        areUsersLoading: false,
      }
    }

    case actionTypes.USERS_FETCH_FAILED: {
      return {
        ...state,
        users: action.payload.users.data
          ? action.payload.users.data
          : {
              status: action.payload.users.status,
              message: 'Could not find resource',
            },
        areUsersLoading: false,
      }
    }

    default:
      return state
  }
}
