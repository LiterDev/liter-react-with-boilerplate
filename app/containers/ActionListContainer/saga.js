import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  makeSelectUserID,
  makeSelectPageType,
} from 'containers/FollowActionPage/selectors';

import { LOAD_LIST, SET_FOLLOW, DEL_FOLLOW } from './constants';
import { listLoaded, listLoadingError } from './actions';
import { setFollowedSuccess, setFollowedError } from './actions';

export function* getContents() {
  // Select username from store
  const userid = yield select(makeSelectUserID());
  const followType = yield select(makeSelectPageType());

  const requestFollowURL = `http://localhost:8080/follow/follower/${userid}`;
  const requestFollowingURL = `http://localhost:8080/follow/following/${userid}`;

  const requestURL =
    followType == 'follow' ? requestFollowURL : requestFollowingURL;

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  try {
    // Call our request helper (see 'utils/request')
    const reqContents = yield call(request, requestURL, options);
    yield put(listLoaded(reqContents, userid));
  } catch (err) {
    yield put(listLoadingError(err));
  }
}

export function* delFollowSaga(data) {
  const userid = yield select(makeSelectUserID());
  const followid = data.followid;
  console.log(data.followid);
  console.log(` << ${userid}`);

  const requestURL = `http://localhost:8080/follow/${followid}`;

  const options = {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  try {
    // Call our request helper (see 'utils/request')
    const reqContents = yield call(request, requestURL, options);
    yield put(setFollowedSuccess(reqContents));
  } catch (err) {
    // yield put(setFollowedError(err));
    yield put(setFollowedError(err));
  }
}

export function* setFollowSaga(data) {
  const userid = yield select(makeSelectUserID());
  const followid = data.followid;
  console.log(data.followid);
  console.log(` << ${userid}`);

  const requestURL = `http://localhost:8080/follow/`;

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      followid,
    }),
  };

  try {
    // Call our request helper (see 'utils/request')
    const reqContents = yield call(request, requestURL, options);
    yield put(setFollowedSuccess(reqContents));
  } catch (err) {
    // yield put(setFollowedError(err));
    yield put(setFollowedError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_LIST, getContents);
  yield takeLatest(SET_FOLLOW, setFollowSaga);
  yield takeLatest(DEL_FOLLOW, delFollowSaga);
}
