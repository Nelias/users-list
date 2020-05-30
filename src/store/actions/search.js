import * as actionTypes from './actionTypes'

export const setSearchPhrase = (dispatch, phrase) => {
  dispatch({ type: actionTypes.SET_SEARCH_PHRASE, phrase: phrase })
}
