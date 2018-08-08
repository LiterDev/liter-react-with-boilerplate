import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { validSuccess, validError } from './actions';
import { VALID_ACTION } from './constants';

export function* validEmail(data) {

  console.log(data.validString);
  const requestURL = `${process.env.API_URL}/user/validemail`;
  const accessToken = localStorage.getItem('accessToken');
  const token = `Bearer ${accessToken}`;
  try {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Authorization: token,
      },
      body: JSON.stringify({
        validString: data.validString,
      }),
    };

    const validRes = yield call(request, requestURL, options);
    // console.log(validRes);
    yield put(validSuccess(validRes));
  } catch (err) {
    yield put(validError(err));
  }
}
// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(VALID_ACTION, validEmail);
}
