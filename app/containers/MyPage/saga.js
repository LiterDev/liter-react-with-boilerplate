/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  MYPAGE_REVIEWS_ACTION,
  MYPAGE_REWARDS_ACTION,
  REWARDS_ACQUIRE_ACTION,
  LOAD_USER_DATA,
  FOLLOWER_COUNT_ACTION,
  FOLLOWING_COUNT_ACTION,
  CHANGE_NICK_NAME_ACTION,
} from './constants';
import * as actions from './actions';
// import { makeSelectMyPage } from './selectors';

export function* getMyReviews() {
  const requestURL = `${process.env.API_URL}/review/myReviewList`;
  const accessToken = localStorage.getItem('accessToken');
  const token = `Bearer ${accessToken}`;
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: token,
      },
    };
    // const req = request(request, requestURL, options);
    const reqContents = yield call(request, requestURL, options);
    console.log(reqContents);
    yield put(actions.myReviewsSuccess(reqContents));
  } catch (err) {
    yield put(actions.myReviewsFailure(err));
  }
}

export function* getMyRewards() {
  const requestURL = `${process.env.API_URL}/reward`;
  const accessToken = localStorage.getItem('accessToken');
  const token = `Bearer ${accessToken}`;
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: token,
      },
    };

    // const req = request(request, requestURL, options);
    const reqContents = yield call(request, requestURL, options);
    console.log(']========= getMyReward SAGA ======[');
    console.log(reqContents);
    yield put(actions.myRewardsSuccess(reqContents));
  } catch (err) {
    yield put(actions.myRewardsFailure(err));
  }
}

export function* getAcquire() {
  const requestURL = `${process.env.API_URL}/reward/acquire`;
  const accessToken = localStorage.getItem('accessToken');
  const token = `Bearer ${accessToken}`;
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: token,
      },
    };

    // const req = request(request, requestURL, options);
    const reqContents = yield call(request, requestURL, options);
    console.log(']========= getAcquire SAGA ======[');
    console.log(reqContents);
    yield put(actions.myRewardsAcquireSuccess(reqContents));
  } catch (err) {
    yield put(actions.myRewardsAcquireFailure(err));
  }
}

export function* loadFollowerCnt(data) {
  // console.log(`loadFollowerCnt::${data.userId}`);
  const requestURL = `${process.env.API_URL}/follow/follower/count/${
    data.userId
  }`;
  const accessToken = localStorage.getItem('accessToken');
  const token = `Bearer ${accessToken}`;
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: token,
      },
    };

    // const req = request(request, requestURL, options);
    const reqContents = yield call(request, requestURL, options);
    // console.log(`request followerCnt :: ${reqContents}`);
    yield put(actions.loadFollowerCountSuccess(reqContents));
  } catch (err) {
    yield put(actions.loadFollowerCountFailure(err));
  }
}

export function* loadFollowingCnt(data) {
  // console.log(`loadFollowingCnt::${data.userId}`);
  const requestURL = `${process.env.API_URL}/follow/following/count/${
    data.userId
  }`;
  const accessToken = localStorage.getItem('accessToken');
  const token = `Bearer ${accessToken}`;
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: token,
      },
    };

    // const req = request(request, requestURL, options);
    const reqContents = yield call(request, requestURL, options);
    // console.log(`request followingCnt :: ${reqContents}`);
    yield put(actions.loadFollowingCountSuccess(reqContents));
  } catch (err) {
    yield put(actions.loadFollowingCountFailure(err));
  }
}

export function* getUserData() {
  const requestURL = `${process.env.API_URL}/user/authInfo`;
  const accessToken = localStorage.getItem('accessToken');
  const token = `Bearer ${accessToken}`;
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Authorization: token,
      },
    };

    const reqContents = yield call(request, requestURL, options);
    // console.log(reqContents);
    yield put(actions.loadUserSuccess(reqContents));
  } catch (err) {
    yield put(actions.loadUserError(err));
  }
}

export function* changeUserNickName(data) {
  const requestURL = `${process.env.API_URL}/user/nickname`;
  const accessToken = localStorage.getItem('accessToken');
  const token = `Bearer ${accessToken}`;
  try {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Authorization: token,
      },
      data: {
        userNickName: data.userNickName,
      },
    };

    const reqContents = yield call(request, requestURL, options);
    // console.log(reqContents);
    yield put(actions.loadUserSuccess(reqContents));
  } catch (err) {
    yield put(actions.loadUserError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* defaultSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(MYPAGE_REVIEWS_ACTION, getMyReviews);
  yield takeLatest(MYPAGE_REWARDS_ACTION, getMyRewards);
  yield takeLatest(REWARDS_ACQUIRE_ACTION, getAcquire);
  yield takeLatest(LOAD_USER_DATA, getUserData);
  yield takeLatest(FOLLOWER_COUNT_ACTION, loadFollowerCnt);
  yield takeLatest(FOLLOWING_COUNT_ACTION, loadFollowingCnt);
  yield takeLatest(CHANGE_NICK_NAME_ACTION, changeUserNickName);
}
