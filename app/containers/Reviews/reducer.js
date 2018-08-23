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
  LOAD_CATEGORY,
  LOAD_CATEGORY_SUCCESS,  
  VOTE_ACTION,
  VOTE_SUCCESS,
  VOTE_ERROR,
} from './constants';

export const initialState = fromJS({
  reviews: false,
  page: 1,
  last: false,
  loading: false,
  error: false,
  loadMore: false,
  categorys: false,
});

function reviewsReducer(state = initialState, action) {
  // console.log(`reaview action === [ ${action.type} ]`);
  // console.log(action.data);
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
    case LOAD_CATEGORY:
      return state;
    case LOAD_CATEGORY_SUCCESS:
      return state.set('categorys', action.data);
    case VOTE_ACTION:
      return state;
    case VOTE_SUCCESS:
        let oriReviews = state.get('reviews');
        oriReviews.filter(item => item.id === action.data.id).map(tt => {
          tt.likeCount = action.data.likeCount;
        });
      return state
        .set('reviews', oriReviews);
    case VOTE_ERROR:
      return state.set('error', action.error);
    default:
      return state;
  }
}

export default reviewsReducer;
