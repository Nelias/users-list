import * as actionTypes from '../actions/types'
import { ISearchState } from './types'

const initialState: ISearchState = {
  phrase: null,
}

export default function searchPhraseReducer(
  state = initialState,
  action: actionTypes.SearchActionTypes
): ISearchState {
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
