import * as actionTypes from '../actions/actionTypes'

const initialState = {
  phrase: null,
}

export default function searchPhraseReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_SEARCH_PHRASE: {
      return {
        ...state,
        phrase: action.phrase,
      }
    }

    default:
      return state
  }
}
