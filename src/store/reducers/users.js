import * as actionTypes from '../actions/actionTypes'

const initialState = {
  users: null,
  areUsersLoading: null,
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
        users: action.payload.data,
        areUsersLoading: false,
      }
    }

    case actionTypes.USERS_FETCH_FAILED: {
      return {
        ...state,
        users: action.payload.response.data
          ? action.payload.response.data.error
          : {
              status: action.payload.response.status,
              message: 'Could not find resource',
            },
        areUsersLoading: false,
      }
    }

    default:
      return state
  }
}
