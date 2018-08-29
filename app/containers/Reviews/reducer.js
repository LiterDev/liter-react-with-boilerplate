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
  UPDATE_REVIEW,
  UPDATED_REVIEW,
  UPDATE_FOLLOW,
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

function clone(obj) {
  if (obj === null || typeof(obj) !== 'object')
  return obj;

  var copy = obj.constructor();

  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      copy[attr] = clone(obj[attr]);
    }
  }
  return copy;
}

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
        // let oriReviews = state.get('reviews');
        let oriReviews = clone(state.get('reviews'));
        oriReviews.map((item,idx,oriReviews) => {
          if(item.id === action.data.id) {
            oriReviews[idx] = action.data;
          }
        });
      return state
        .set('reviews', oriReviews);
    case UPDATE_REVIEW:
      return state;
    case UPDATED_REVIEW:
        // let oriReviews = state.get('reviews');
        let updateReviews = clone(state.get('reviews'));
        updateReviews.map((item,idx,updateReviews) => {
          if(item.id === action.data.id) {
            updateReviews[idx] = action.data;
          }
        });
      return state
        .set('reviews', updateReviews);
    case VOTE_ERROR:
      return state.set('error', action.error);
    case UPDATE_FOLLOW:
      return state;
    default:
      return state;
  }
}

export default reviewsReducer;
