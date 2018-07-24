import { call, put, takeLatest } from 'redux-saga/effects';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import request from 'utils/request';
import { SIGNUP_ACTION } from './constants';
// import { makeSelectSignUp } from './selectors';

export function* signup(data) {
  // Select username from store
  // const data = yield select(makeSelectSignUp());
  // const data = new FormData(event.target);
  console.log(data);
  console.log(data.data.get('username'));
  const requestURL = `https://127.0.0.1:8080/user/signUp`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, data));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SIGNUP_ACTION, signup);
}
