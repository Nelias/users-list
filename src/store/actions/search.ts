import { Dispatch, Action } from 'redux'

import * as actionTypes from './types'
import { TPhrase } from '../reducers/types'

export const setSearchPhrase = (dispatch: Dispatch<Action>, phrase: TPhrase) => {
  dispatch({ type: actionTypes.SET_SEARCH_PHRASE, phrase: phrase })
}
