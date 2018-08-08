/*
 *
 * ReviewCardBottomBar reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, VOTE_ACTION, VOTE_SUCCESS, VOTE_ERROR } from './constants';

export const initialState = fromJS({});

function reviewCardBottomBarReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case VOTE_ACTION:
      return state;
    case VOTE_SUCCESS:
      console.log("VOTE_SUCCESS");
      return state;
    case VOTE_ERROR:
      console.log("VOTE_ERROR");
      console.log(action);
      return state;
    default:
      return state;
  }
}

export default reviewCardBottomBarReducer;
