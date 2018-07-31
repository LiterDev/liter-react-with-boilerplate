/*
 *
 * Reviews reducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_REVIEW_ACTION, LOAD_REVIEW_SUCCESS, LOAD_REVIEW_ERROR } from './constants';

export const initialState = fromJS({
  reviews: false,
  loading: false,
  error: false,
});

function reviewsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REVIEW_ACTION:
      return (
        state
          .set('loading', true)
          .set('error', false)
      );
    case LOAD_REVIEW_SUCCESS:
      return (
        state
          .set('loading', false)
          .set('error', false)
          .set('reviews', action.data.content)
      );
    case LOAD_REVIEW_ERROR:
      return state;
    default:
      return state;
  }
}

export default reviewsReducer;
