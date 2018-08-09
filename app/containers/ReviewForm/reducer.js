/*
 *
 * ReviewForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  POST_ACTION,
  POST_SEND,
  POST_SUCCESS,
  POST_ERROR,
  LOAD_ACTION,
  LOAD_SUCCESS,
  LOAD_SURVEY_SUCCESS,
  LOAD_FAILURE,
  LOAD_INIT,
} from './constants';

export const initialState = fromJS({
  loading: false,
  error: false,
  result: false,
  reviews: false,
  surveys: false,
});

function reviewFormReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case POST_ACTION:
      return state;
    case POST_SEND:
      console.log('post_send');
      return state.set('loading', true).set('error', false);
    case POST_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('result', action.data);
    case POST_ERROR:
      return state.set('loading', false).set('error', true);
    case LOAD_ACTION:
      return state;
    case LOAD_SUCCESS:
      return state.set('reviews', action.data);
    case LOAD_SURVEY_SUCCESS:
      return state.set('surveys', action.data);
    case LOAD_FAILURE:
      return state;
    case LOAD_INIT:
      return state.set('reviews', false).set('surveys', false);
    default:
      return state;
  }
}

export default reviewFormReducer;
