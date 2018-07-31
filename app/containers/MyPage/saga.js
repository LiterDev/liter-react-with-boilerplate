/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { MYPAGE_ACTION } from './constants';

export function* mypage(pageData) {
  // Select username from store
  // const data = yield select(makeSelectSignUp());
  // const data = new FormData(event.target);
  console.log(pageData);
  // console.log(pageData.data.get('id'));
  // console.log(pageData.data.get('userId'));
  const userId = pageData.data.get('userId');
  const requestURL = `http://localhost:8080/user/detail/${userId}`;

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
    console.log(repos);
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
