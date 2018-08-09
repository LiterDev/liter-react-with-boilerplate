/*
 *
 * MyPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as constants from './constants';

export const initialState = fromJS({
  reviews: false,
  rewords: false,
  acquire: 0,
  followerCount: 0,
  followingCount: 0,
  loading: false,
  error: false,
  userData: false,
});

function myPageReducer(state = initialState, action) {
  switch (action.type) {
    case constants.MYPAGE_REVIEWS_ACTION:
      return state.set('loading', true).set('error', false);
    case constants.MYPAGE_REVIEWS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('reviews', action.data.content);
    case constants.MYPAGE_REVIEWS_FAILURE:
      return state;
    case constants.MYPAGE_REWORDS_ACTION:
      return state.set('loading', true).set('error', false);
    case constants.MYPAGE_REWORDS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('rewords', action.data.content);
    case constants.MYPAGE_REWORDS_FAILURE:
      return state;
    case constants.REWORDS_ACQUIRE_ACTION:
      return state.set('loading', true).set('error', false);
    case constants.REWORDS_ACQUIRE_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('acquire', action.data.content);
    case constants.REWORDS_ACQUIRE_FAILURE:
      return state;
    case constants.FOLLOWER_COUNT_ACTION:
      return state;
    case constants.FOLLOWER_COUNT_SUCCESS:
      // console.log(action);
      return state
        .set('loading', false)
        .set('error', false)
        .set('followerCount', action.data);
    case constants.FOLLOWER_COUNT_FAILURE:
      return state;
    case constants.FOLLOWING_COUNT_ACTION:
      return state;
    case constants.FOLLOWING_COUNT_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('followingCount', action.data);
    case constants.FOLLOWING_COUNT_FAILURE:
      return state;
    case constants.LOAD_USER_DATA:
      return state;
    case constants.LOAD_USER_SUCCESS:
      return state.set('userData', action.data);
    case constants.LOAD_USER_ERROR:
      // console.log(action.data);
      return state;
    default:
      console.log(action.type);
      return state;
  }
}

export default myPageReducer;
