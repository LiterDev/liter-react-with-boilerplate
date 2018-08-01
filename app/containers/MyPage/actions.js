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
} from './constants';

export function myPageAction(data) {
  console.log('myPageAction');
  return {
    type: MYPAGE_ACTION,
    data,
  };
}

export function myPageSuccess(data) {
  console.log('myPageSuccess');
  console.log(data);
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

export function loadFollowerCountAction(data) {
  console.log('loadFollowerCountAction');
  return {
    type: FOLLOWER_COUNT_ACTION,
    data,
  };
}

export function loadFollowerCountSuccess(data) {
  console.log('loadFollowerCountSuccess');
  console.log(data);
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

export function loadFollowingCountAction(data) {
  console.log('loadFollowingCountAction');
  return {
    type: FOLLOWING_COUNT_ACTION,
    data,
  };
}

export function loadFollowingCountSuccess(data) {
  console.log('loadFollowingCountSuccess');
  console.log(data);
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
