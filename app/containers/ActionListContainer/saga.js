import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  makeSelectUserID,
  makeSelectPageType,
} from 'containers/FollowActionPage/selectors';

import { LOAD_LIST, SET_FOLLOW, SET_UNFOLLOW } from './constants';
import { loadList, listLoaded, listLoadingError } from './actions';
import { setFollowedSuccess, setFollowedError } from './actions';

export function* getContents() {
  // Select username from store
  const userid = yield select(makeSelectUserID());
  const followType = yield select(makeSelectPageType());

  const accessToken = localStorage.getItem('accessToken');
  const token = `Bearer ${accessToken}`;

  // const requestFollowURL = `${process.env.API_URL}/follow/follower/${userid}`;
  // const requestFollowingURL = `${process.env.API_URL}/follow/following/${userid}`;
  const requestFollowURL = `${process.env.API_URL}/follow/follower`;
  const requestFollowingURL = `${process.env.API_URL}/follow/following`;

  const requestURL =
    followType == 'follow' ? requestFollowURL : requestFollowingURL;

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': token,
    },
  };

  try {
    // Call our request helper (see 'utils/request')
    const reqContents = yield call(request, requestURL, options);
    console.log(reqContents);
    yield put(listLoaded(reqContents, userid));
  } catch (err) {
    yield put(listLoadingError(err));
  }
}

export function* setUnFollowSaga(data) {
  const followId = data.followid;
  const requestURL = `${process.env.API_URL}/follow/${followId}`;
  const accessToken = localStorage.getItem('accessToken');
  const token = `Bearer ${accessToken}`;
  const options = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': token,
    },
  };

  try {
    // Call our request helper (see 'utils/request')
    const reqContents = yield call(request, requestURL, options);
    // console.log(reqContents);
    // yield put(setFollowedSuccess(reqContents));
    yield put(loadList());
  } catch (err) {
    // yield put(setFollowedError(err));
    // yield put(setFollowedError(err));
    yield put(loadList());
  }
}

export function* setFollowSaga(data) {
  const followId = data.followid;
  const requestURL = `${process.env.API_URL}/follow`;
  const accessToken = localStorage.getItem('accessToken');
  const token = `Bearer ${accessToken}`;
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': token,
    },
    body: JSON.stringify({
      'followId': followId
    }),
  };
  try {
    // Call our request helper (see 'utils/request')
    const reqContents = yield call(request, requestURL, options);
    console.log(reqContents);
    // yield put(setFollowedSuccess({reqContents, followId}));
    yield put(loadList());
  } catch (err) {
    // yield put(setFollowedError(err));
    yield put(loadList());
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_LIST, getContents);
  yield takeLatest(SET_FOLLOW, setFollowSaga);
  yield takeLatest(SET_UNFOLLOW, setUnFollowSaga);
}
