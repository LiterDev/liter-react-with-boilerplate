/*
 *
 * MyPage actions
 *
 */

import {
  MYPAGE_REVIEWS_ACTION,
  MYPAGE_REVIEWS_SUCCESS,
  MYPAGE_REVIEWS_FAILURE,
  MYPAGE_REWARDS_ACTION,
  MYPAGE_REWARDS_SUCCESS,
  MYPAGE_REWARDS_FAILURE,
  REWARDS_ACQUIRE_ACTION,
  REWARDS_ACQUIRE_SUCCESS,
  REWARDS_ACQUIRE_FAILURE,
  FOLLOWER_COUNT_ACTION,
  FOLLOWER_COUNT_SUCCESS,
  FOLLOWER_COUNT_FAILURE,
  FOLLOWING_COUNT_ACTION,
  FOLLOWING_COUNT_SUCCESS,
  FOLLOWING_COUNT_FAILURE,
  LOAD_USER_DATA,
  LOAD_USER_SUCCESS,
  LOAD_USER_ERROR,
  CHANGE_NICK_NAME_ACTION,
  CHANGE_NICK_NAME_SUCCESS,
  CHANGE_NICK_NAME_FAILURE,
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

export function myRewardsAction() {
  // console.log('myPageAction');
  return {
    type: MYPAGE_REWARDS_ACTION,
  };
}

export function myRewardsSuccess(data) {
  // console.log('myPageSuccess');
  // console.log(data);
  return {
    type: MYPAGE_REWARDS_SUCCESS,
    data,
  };
}

export function myRewardsFailure(error) {
  console.log('myReviewFailure');
  return {
    type: MYPAGE_REWARDS_FAILURE,
    error,
  };
}

export function myRewardAcquireAction() {
  // console.log('myRewardAcquireAction');
  return {
    type: REWARDS_ACQUIRE_ACTION,
  };
}

export function myRewardsAcquireSuccess(data) {
  // console.log('myRewardsAcquireSuccess');
  // console.log(data);
  return {
    type: REWARDS_ACQUIRE_SUCCESS,
    data,
  };
}

export function myRewardsAcquireFailure(error) {
  console.log('myRewardsAcquireFailure');
  return {
    type: REWARDS_ACQUIRE_FAILURE,
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

export function changeNickNameAction(userNickName) {
  return {
    type: CHANGE_NICK_NAME_ACTION,
    userNickName,
  };
}

export function changeNickNameSuccess(data) {
  return {
    type: CHANGE_NICK_NAME_SUCCESS,
    data,
  };
}
export function changeNickNameFailure(error) {
  return {
    type: CHANGE_NICK_NAME_FAILURE,
    error,
  };
}
