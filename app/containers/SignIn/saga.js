import { call, put, takeLatest } from 'redux-saga/effects';

import { request, requestRoot } from 'utils/request';
import { signinSuccess, signinError } from './actions';
import { SIGNIN_ACTION } from './constants';

export function* signin(data) {
  const requestURL = `${requestRoot()}/auth/signIn`;
  // const requestURL = 'http://api.getliter.io/auth/signIn';
  // console.log(data);
  // console.log(data.email);
  // console.log(data.password);
  try {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        username: data.email,
        password: data.password,
      }),
    };

    const signinRes = yield call(request, requestURL, options);
    yield put(signinSuccess(signinRes));
  } catch (err) {
    yield put(signinError(err));
  }
}
// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SIGNIN_ACTION, signin);
}
