/*
 *
 * ReviewDetailPage reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, LOAD_ACTION, LOAD_SUCCESS, LOAD_FAILURE } from './constants';

export const initialState = fromJS({
  // reviewId: false,
  reviews: false,
});

function reviewDetailPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ACTION:
      return state;
    case LOAD_SUCCESS:
      return state
            .set('reviews', action.data);
    case LOAD_FAILURE:
      return state;
    default:
      return state;
  }
}

export default reviewDetailPageReducer;
