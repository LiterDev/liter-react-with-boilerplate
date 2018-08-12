/*
 *
 * Reviews reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_REVIEW_ACTION,
  LOAD_REVIEW_SUCCESS,
  LOAD_REVIEW_ERROR,
  LOAD_REVIEW_MORE,
  LOAD_REVIEW_MORE_SUCCESS,
  LOAD_REVIEW_MORE_ERROR,
} from './constants';

export const initialState = fromJS({
  reviews: false,
  page: 1,
  last: false,
  loading: false,
  error: false,
  loadMore: false,
});

function reviewsReducer(state = initialState, action) {
  console.log(`reaview action === [ ${action.type} ]`);
  switch (action.type) {
    case LOAD_REVIEW_ACTION:
      return state.set('loading', true).set('error', false);
    case LOAD_REVIEW_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('reviews', action.data.content);
    case LOAD_REVIEW_ERROR:
      return state;
    case LOAD_REVIEW_MORE:
      return state.set('loadMore', true);
    case LOAD_REVIEW_MORE_SUCCESS:
      let list = state.get('reviews');
      const curPage = state.get('page') + 1;
      const reviews = list.concat(action.data.content);
      console.log(']]]] >>>>>>>>>> LOAD SUCCESS');
      return state
        .set('page', curPage)
        .set('loadMore', false)
        .set('reviews', reviews)
        .set('last', action.data.last);
    case LOAD_REVIEW_MORE_ERROR:
      return state.set('loadMore', false).set('error', true);
    default:
      return state;
  }
}

export default reviewsReducer;
