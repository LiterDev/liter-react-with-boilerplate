import { call, put, takeLatest } from 'redux-saga/effects';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import request from 'utils/request';
import { SIGNUP_ACTION } from './constants';
// import { makeSelectSignUp } from './selectors';

export function* signup(signData) {
  // Select username from store
  // const data = yield select(makeSelectSignUp());
  // const data = new FormData(event.target);
  console.log(signData.data);
  console.log(signData.data.get('username'));
  const requestURL = `http://127.0.0.1:8080/user/signUp`;

  try {
    // Call our request helper (see 'utils/request')

    // const options = {
    //   body: JSON.stringify({ login, password }),
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' }
    // };

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        data: signData.data,
      }),
    };

    // const req = request(request, requestURL, options);
    const repos = yield call(request, requestURL, options);
    yield put(reposLoaded(repos, repos));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SIGNUP_ACTION, signup);
}
