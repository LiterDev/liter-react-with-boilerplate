import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { reviewListLoaded, reviewListLoadingError } from './actions';
import { LOAD_REVIEW_ACTION } from './constants';

export function* getReviews() {
  const requestURL = `${process.env.API_URL}/review/latestList`;

  try {
    // Call our request helper (see 'utils/request')
    // const reqContents = yield call(request, requestURL, options);
    const reqContents = yield call(request, requestURL);
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
