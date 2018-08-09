/*
 *
 * MyPage actions
 *
 */

import {
  MYPAGE_REVIEWS_ACTION,
  MYPAGE_REVIEWS_SUCCESS,
  MYPAGE_REVIEWS_FAILURE,
  MYPAGE_REWORDS_ACTION,
  MYPAGE_REWORDS_SUCCESS,
  MYPAGE_REWORDS_FAILURE,
  REWORDS_ACQUIRE_ACTION,
  REWORDS_ACQUIRE_SUCCESS,
  REWORDS_ACQUIRE_FAILURE,
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

export function myReviewsAction() {
  // console.log('myPageAction');
  return {
    type: MYPAGE_REVIEWS_ACTION,
  };
}

export function myReviewsSuccess(data) {
  // console.log('myPageSuccess');
  // console.log(data);
  return {
    type: MYPAGE_REVIEWS_SUCCESS,
    data,
  };
}

export function myReviewsFailure(error) {
  console.log('myReviewFailure');
  return {
    type: MYPAGE_REVIEWS_FAILURE,
    error,
  };
}

export function myRewordsAction() {
  // console.log('myPageAction');
  return {
    type: MYPAGE_REWORDS_ACTION,
  };
}

export function myRewordsSuccess(data) {
  // console.log('myPageSuccess');
  // console.log(data);
  return {
    type: MYPAGE_REWORDS_SUCCESS,
    data,
  };
}

export function myRewordsFailure(error) {
  console.log('myReviewFailure');
  return {
    type: MYPAGE_REWORDS_FAILURE,
    error,
  };
}

export function myRewordAcquireAction() {
  // console.log('myRewordAcquireAction');
  return {
    type: REWORDS_ACQUIRE_ACTION,
  };
}

export function myRewordsAcquireSuccess(data) {
  // console.log('myRewordsAcquireSuccess');
  // console.log(data);
  return {
    type: REWORDS_ACQUIRE_SUCCESS,
    data,
  };
}

export function myRewordsAcquireFailure(error) {
  console.log('myRewordsAcquireFailure');
  return {
    type: REWORDS_ACQUIRE_FAILURE,
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
