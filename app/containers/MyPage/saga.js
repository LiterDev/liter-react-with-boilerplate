/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { MYPAGE_ACTION } from './constants';
import * as actions from './actions';
// import { makeSelectMyPage } from './selectors';

export function* mypage(data) {
  console.log(data.data.username);
  const requestURL = 'http://127.0.0.1:8080/review/myReviewList';
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
    yield put(actions.myPageSuccess(reqContents));
  } catch (err) {
    yield put(actions.myPageFailure(err));
  }
}

export function* loadFollowerCnt(data) {
  console.log(data.data.id);
  const userId = data.data.id;
  const requestURL = `http://127.0.0.1:8080/follower/count/${userId}`;
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    // const req = request(request, requestURL, options);
    const reqContents = yield call(request, requestURL, options);
    console.log(reqContents);
    yield put(actions.myPageSuccess(reqContents));
  } catch (err) {
    yield put(actions.myPageFailure(err));
  }
}

export function* loadFollowingCnt(data) {
  console.log(data.data.username);
  const userId = data.data.id;
  const requestURL = `http://127.0.0.1:8080/following/count/${userId}`;
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };

    // const req = request(request, requestURL, options);
    const reqContents = yield call(request, requestURL, options);
    console.log(reqContents);
    yield put(actions.myPageSuccess(reqContents));
  } catch (err) {
    yield put(actions.myPageFailure(err));
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
  yield takeLatest(MYPAGE_ACTION, mypage);
}
