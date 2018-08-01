/*
 *
 * MyPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  MYPAGE_ACTION,
  MYPAGE_SUCCESS,
  MYPAGE_FAILURE,
  FOLLOWER_COUNT_ACTION,
  FOLLOWER_COUNT_SUCCESS,
  FOLLOWER_COUNT_FAILURE,
  FOLLOWING_COUNT_ACTION,
  FOLLOWING_COUNT_SUCCESS,
  FOLLOWING_COUNT_FAILURE,
} from './constants';

export const initialState = fromJS({
  myPages: false,
  followerCount: 0,
  followingCount: 0,
  loading: false,
  error: false,
});

function myPageReducer(state = initialState, action) {
  switch (action.type) {
    case MYPAGE_ACTION:
      return state.set('loading', true).set('error', false);
    case MYPAGE_SUCCESS:
      console.log(action);
      return state
        .set('loading', false)
        .set('error', false)
        .set('myPages', action.data.content);
    case MYPAGE_FAILURE:
      return state;
    case FOLLOWER_COUNT_ACTION:
      return state;
    case FOLLOWER_COUNT_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('followerCount', action.data.content);
    case FOLLOWER_COUNT_FAILURE:
      return state;
    case FOLLOWING_COUNT_ACTION:
      return state;
    case FOLLOWING_COUNT_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('followingCount', action.data.content);
    case FOLLOWING_COUNT_FAILURE:
      return state;
    default:
      return state;
  }
}

export default myPageReducer;
