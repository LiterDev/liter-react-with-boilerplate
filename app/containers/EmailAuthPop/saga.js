import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import * as actions from './actions';

import { SEND_EMAIL_AUTH } from './constants';

// Individual exports for testing
export function* sendEmailAuth() {
  const requestURL = `${process.env.API_URL}/user/validemailSend`;
  const accessToken = localStorage.getItem('accessToken');
  // const refreshToken = localStorage.getItem('refreshToken');
  // console.log(accessToken);
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
    const res = yield call(request, requestURL, options);
    // console.log(res);
    yield put(actions.emailAuthSuccess(res));
  } catch (err) {
    // console.log(err);
    // yield put(actions.myPageFailure(err));
  }
}
// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SEND_EMAIL_AUTH, sendEmailAuth);
}