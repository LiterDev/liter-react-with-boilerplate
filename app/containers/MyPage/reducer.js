/*
 *
 * MyPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as constants from './constants';

export const initialState = fromJS({
  reviews: false,
  rewards: false,
  acquire: 0,
  estimated: 0,
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
    case constants.MYPAGE_REWARDS_ACTION:
      return state.set('loading', true).set('error', false);
    case constants.MYPAGE_REWARDS_SUCCESS:
      console.log('action.data::reward list -------- reducer mypage');
      console.log(action.data);
      return state
        .set('loading', false)
        .set('error', false)
        .set('rewards', action.data);
    case constants.MYPAGE_REWARDS_FAILURE:
      return state;

    case constants.REWARDS_ESTIMATED_ACTION:
      return state.set('loading', true).set('error', false);
    case constants.REWARDS_ESTIMATED_SUCCESS:
      console.log('action.data::estimated list -------- reducer mypage');
      console.log(action.data);
      return state
        .set('loading', false)
        .set('error', false)
        .set('estimated', action.data);
    case constants.REWARDS_ESTIMATED_FAILURE:
      return state;

    case constants.REWARDS_ACQUIRE_ACTION:
      return state.set('loading', true).set('error', false);
    case constants.REWARDS_ACQUIRE_SUCCESS:
      console.log('action.data::acquire list -------- reducer mypage');
      console.log(action.data);
      return state
        .set('loading', false)
        .set('error', false)
        .set('acquire', action.data);
    case constants.REWARDS_ACQUIRE_FAILURE:
      return state;
    case constants.FOLLOWER_COUNT_ACTION:
      return state;
    case constants.FOLLOWER_COUNT_SUCCESS:
      console.log('FOLLOWER_COUNT_SUCCESS');
      return state
        .set('loading', false)
        .set('error', false)
        .set('followerCount', action.data);
    case constants.FOLLOWER_COUNT_FAILURE:
      return state;
    case constants.FOLLOWING_COUNT_ACTION:
      return state;
    case constants.FOLLOWING_COUNT_SUCCESS:
      console.log('FOLLOWING_COUNT_SUCCESS');
      return state
        .set('loading', false)
        .set('error', false)
        .set('followingCount', action.data);
    case constants.FOLLOWING_COUNT_FAILURE:
      return state;
    case constants.LOAD_USER_DATA:
      return state;
    case constants.LOAD_USER_SUCCESS:
      return state.set('userData', fromJS(action.data));
    case constants.LOAD_USER_ERROR:
      // console.log(action.data);
      return state;
    case constants.CHANGE_NICK_NAME_ACTION:
      return state;
    case constants.CHANGE_NICK_NAME_SUCCESS:
      console.log('#####');
      console.log(action.data.userNickName);
      // localStorage.setItem('userNickName', action.data.userNickName);
      // return state.setIn(['userData', 'userNickName'], 'test');
      console.log(state);
      return state
        .set('loading', false)
        .set('error', false)
        .setIn(['userData', 'userNickName'], action.data.userNickName);
    // return state.setIn(
    //   ['userData', 'userNickName'],
    //   action.data.userNickName,
    // );
    // return state;
    case constants.CHANGE_NICK_NAME_FAILURE:
      // console.log(action.error.response.data.code);
      return state
        .set('loading', false)
        .set('error', action.error.response.data.code);
    // console.log(action.data);
    // return state;
    default:
      // console.log(action.type);
      return state;
  }
}

export default myPageReducer;
