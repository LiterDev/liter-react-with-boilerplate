import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { reviewListLoaded, reviewListLoadingError } from './actions';
import { LOAD_REVIEW_ACTION, LOAD_REVIEW_MORE } from './constants';

import { loadListMoreSuccess, loadListMoreError } from './actions';

import makeSelectReviews from './selectors';

export function* getReviews() {
  const requestURL = `${process.env.API_URL}/review/latestList?page=1`;
  const accessToken = localStorage.getItem('accessToken');
  let token = null;
  if (accessToken) {
    token = `Bearer ${accessToken}`;
  }

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
    let reqContents = null;
    if (accessToken) {
      reqContents = yield call(request, requestURL, options);
    } else {
      reqContents = yield call(request, requestURL);
    }

    yield put(reviewListLoaded(reqContents));
  } catch (err) {
    yield put(reviewListLoadingError(err));
  }
}

export function* getReviewMore() {
  const reviews = yield select(makeSelectReviews());
  const curPage = reviews.page + 1;
  const requestURL = `${process.env.API_URL}/review/latestList?page=${curPage}`;
  // const accessToken = localStorage.getItem('accessToken');
  // const token = `Bearer ${accessToken}`;
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
    const reqContents = yield call(request, requestURL);
    // const reqContents = yield call(request, requestURL, options);
    yield put(loadListMoreSuccess(reqContents));
  } catch (err) {}
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_REVIEW_ACTION, getReviews);
  yield takeLatest(LOAD_REVIEW_MORE, getReviewMore);
}
