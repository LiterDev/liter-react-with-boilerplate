import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { reviewListLoaded, reviewListLoadingError } from './actions';
import { LOAD_REVIEW_ACTION } from './constants';

export function* getReviews(data) {
  console.log(`reaview saga === [ ${data}]`);
  const userid = data.userid;
  const requestURL = `${process.env.API_URL}/review/latestList`;
  const accessToken = localStorage.getItem('accessToken');
  const token = `Bearer ${accessToken}`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json;charset=UTF-8',
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      Authorization: token,
    },
  };

  try {
    // Call our request helper (see 'utils/request')
    // const reqContents = yield call(request, requestURL, options);
    const reqContents = yield call(request, requestURL, options);
    yield put(reviewListLoaded(reqContents));
  } catch (err) {
    yield put(reviewListLoadingError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_REVIEW_ACTION, getReviews);
}
