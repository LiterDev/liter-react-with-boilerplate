import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { reviewListLoaded, reviewListLoadingError } from './actions';
import { LOAD_REVIEW_ACTION, LOAD_REVIEW_MORE } from './constants';

import { loadListMoreSuccess, loadListMoreError } from './actions';

import makeSelectReviews from './selectors';

export function* getReviews() {
  const requestURL = `${process.env.API_URL}/review/latestList?page=1`;

  try {
    // Call our request helper (see 'utils/request')
    // const reqContents = yield call(request, requestURL, options);
    const reqContents = yield call(request, requestURL);
    yield put(reviewListLoaded(reqContents));
  } catch (err) {
    yield put(reviewListLoadingError(err));
  }
}

export function* getReviewMore() {
  const reviews = yield(select(makeSelectReviews()));
  const curPage = reviews.page + 1;
  const requestURL = `${process.env.API_URL}/review/latestList?page=${curPage}`;
  try {
    const reqContents = yield call(request, requestURL);
    yield put(loadListMoreSuccess(reqContents));
    } catch (err) {
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_REVIEW_ACTION, getReviews);
  yield takeLatest(LOAD_REVIEW_MORE, getReviewMore);
}
