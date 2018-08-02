import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { makeSelectReviewId } from './selectors';

import { loadedSuccess, loadedFailure } from './actions';
import { LOAD_ACTION } from './constants';

export function* getReview(data) {
  // const reviewId = yield select(makeSelectReviewId());
  const reviewId = data.reviewId;
  const requestURL = `${process.env.API_URL}/review/detail/${reviewId}`;

  try {
    // Call our request helper (see 'utils/request')
    // const reqContents = yield call(request, requestURL, options);
    const reqContents = yield call(request, requestURL);
    yield put(loadedSuccess(reqContents));
  } catch (err) {
    yield put(loadedFailure(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_ACTION, getReview);
}
