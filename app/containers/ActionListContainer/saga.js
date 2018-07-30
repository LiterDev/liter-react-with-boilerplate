import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectUserID } from 'containers/FollowActionPage/selectors';

import { LOAD_LIST } from './constants';
import { listLoaded, listLoadingError } from './actions';

export function* getContents() {
  // Select username from store
  const userid = yield select(makeSelectUserID());
  const requestURL = `http://localhost:8080/follow?userid=${userid}`;

  try {
    // Call our request helper (see 'utils/request')
    const reqContents = yield call(request, requestURL);
    yield put(listLoaded(reqContents, userid));
  } catch (err) {
    yield put(listLoadingError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_LIST, getContents);
}
