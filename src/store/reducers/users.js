import * as actionTypes from '../actions/actionTypes'

const initialState = {
  usersList: [],
  areUsersLoading: false,
  usersErrorMessage: null,
}

export default function usersFetchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USERS_FETCH_REQUESTED: {
      return {
        ...state,
        areUsersLoading: true,
        usersErrorMessage: null,
      }
    }

    case actionTypes.USERS_FETCH_SUCCEEDED: {
      return {
        ...state,
        usersList: action.payload.users.data,
        areUsersLoading: false,
        usersErrorMessage: null,
      }
    }

    case actionTypes.USERS_FETCH_FAILED: {
      return {
        ...state,
        areUsersLoading: false,
        usersErrorMessage: 'Failed to fetch the users list!',
      }
    }

    default:
      return state
  }
}
