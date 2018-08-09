/*
 *
 * MyPage actions
 *
 */

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
  LOAD_USER_DATA,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
} from './constants';

export function loadUserData() {
  return {
    type: LOAD_USER_DATA,
  };
}

export function loadUserSuccess(data) {
  return {
    type: LOAD_USER_SUCCESS,
    data,
  };
}
export function loadUserError(data) {
  return {
    type: LOAD_USER_ERROR,
    data,
  };
}

export function myPageAction() {
  // console.log('myPageAction');
  return {
    type: MYPAGE_ACTION,
  };
}

export function myPageSuccess(data) {
  // console.log('myPageSuccess');
  // console.log(data);
  return {
    type: MYPAGE_SUCCESS,
    data,
  };
}

export function myPageFailure(error) {
  console.log('myPageFailure');
  return {
    type: MYPAGE_FAILURE,
    error,
  };
}

export function loadFollowerCountAction(userId) {
  // console.log(`loadFollowerCountAction::${userId}`);
  return {
    type: FOLLOWER_COUNT_ACTION,
    userId,
  };
}

export function loadFollowerCountSuccess(data) {
  // console.log(`loadFollowerCountSuccess::${data}`);
  return {
    type: FOLLOWER_COUNT_SUCCESS,
    data,
  };
}

export function loadFollowerCountFailure(error) {
  console.log('loadFollowerCountFailure');
  return {
    type: FOLLOWER_COUNT_FAILURE,
    error,
  };
}

export function loadFollowingCountAction(userId) {
  // console.log(`loadFollowingCountAction:::${userId}`);
  return {
    type: FOLLOWING_COUNT_ACTION,
    userId,
  };
}

export function loadFollowingCountSuccess(data) {
  // console.log('loadFollowingCountSuccess');
  // console.log(data);
  return {
    type: FOLLOWING_COUNT_SUCCESS,
    data,
  };
}

export function loadFollowingCountFailure(error) {
  console.log('loadFollowingCountFailure');
  return {
    type: FOLLOWING_COUNT_FAILURE,
    error,
  };
}
