/*
 *
 * ReviewDetailPage reducer
 *
 */

import { fromJS } from 'immutable';
import { 
  DEFAULT_ACTION, 
  LOAD_ACTION, 
  LOAD_SUCCESS, 
  LOAD_SURVEY_SUCCESS, 
  LOAD_FAILURE,
  FOLLOW_ACTION,
  VOTE_ACTION,
  VOTE_SUCCESS,
  VOTE_ERROR,
} from './constants';

export const initialState = fromJS({
  // reviewId: false,
  reviews: false,
  surveys: false,
  error: false,
});

function reviewDetailPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ACTION:
      return state;
    case LOAD_SUCCESS:
      return state
            .set('reviews', action.data);
    case LOAD_SURVEY_SUCCESS:
      return state
            .set('surveys', action.data);
    case LOAD_FAILURE:
      return state;
    case FOLLOW_ACTION:
      return state;
    case VOTE_ACTION:
      return state;
    case VOTE_SUCCESS:
      return state
            .set('reviews', action.data);
    case VOTE_ERROR:
      return state.set('error', action.error);
    default:
      return state;
  }
}

export default reviewDetailPageReducer;
