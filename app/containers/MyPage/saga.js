/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import { MYPAGE_ACTION } from './constants';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* mypage(pageData) {
  // Select username from store
  // const data = yield select(makeSelectSignUp());
  // const data = new FormData(event.target);
  // console.log(pageData.data);
  // console.log(pageData.data.get('id'));
  console.log(pageData.data.get('userId'));
  const requestURL = `http://127.0.0.1:8080/user/detail`;

  try {
    // Call our request helper (see 'utils/request')

    // const options = {
    //   body: JSON.stringify({ login, password }),
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' }
    // };

    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        data: pageData.data,
      }),
    };

    // const req = request(request, requestURL, options);
    const repos = yield call(request, requestURL, options);
    yield put(reposLoaded(repos, repos));
  } catch (err) {
    yield put(repoLoadingError(err));
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
