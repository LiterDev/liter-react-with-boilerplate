/**
 * Gets the repositories of the user from Github
 */

import { select, call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { MYPAGE_ACTION } from './constants';
import * as actions from './actions';
import { makeSelectMyPage } from './selectors';

export function* mypage(data) {
  const selectid = yield select(makeSelectMyPage());

  console.log(selectid);
  console.log(data);

  const requestURL = `http://localhost:8080/review/latestList`;

  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: data,
    };

    // const req = request(request, requestURL, options);
    const repos = yield call(request, requestURL, options);
    console.log(repos);
    yield put(actions.myPageSuccess(repos));
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
