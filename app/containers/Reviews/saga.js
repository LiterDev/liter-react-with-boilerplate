import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { reviewListLoaded, reviewListLoadingError } from './actions';
import {
  LOAD_REVIEW_ACTION,
  LOAD_REVIEW_MORE,
  LOAD_CATEGORY,
} from './constants';

import {
  loadListMoreSuccess,
  loadListMoreError,
  categoryLoaded,
} from './actions';

import makeSelectReviews from './selectors';

export function* getReviews(data) {
  console.log(`saga getReviews === [ ${data.cateValue} ]`);
  const requestURL = `${
    process.env.API_URL
  }/review/latestList?page=1&categoryId=${data.cateValue}`;
  const accessToken = localStorage.getItem('accessToken');
  // console.log(`accessToken========[ ${accessToken}]`);
  let token = null;
  let options = null;
  if (accessToken) {
    token = `Bearer ${accessToken}`;
    options = {
      method: 'GET',
      headers: {
        Accept: 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Authorization: token,
      },
    };
  } else {
    options = {
      method: 'GET',
      headers: {
        Accept: 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
      },
    };
  }

  try {
    // Call our request helper (see 'utils/request')

    const reqContents = yield call(request, requestURL, options);

    yield put(reviewListLoaded(reqContents));
  } catch (err) {
    yield put(reviewListLoadingError(err));
  }
}

export function* getReviewMore(data) {
  const reviews = yield select(makeSelectReviews());
  const curPage = reviews.page + 1;
  const requestURL = `${
    process.env.API_URL
  }/review/latestList?page=${curPage}&categoryId=${data.cateValue}`;
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
    // const reqContents = yield call(request, requestURL);
    const reqContents = yield call(request, requestURL, options);
    yield put(loadListMoreSuccess(reqContents));
  } catch (err) {}
}

export function* getCategorys() {
  const requestURL = `${process.env.API_URL}/review/category`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json;charset=UTF-8',
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
  };

  try {
    // Call our request helper (see 'utils/request')

    const reqContents = yield call(request, requestURL, options);
    // console.log('category');
    // console.log(reqContents);
    yield put(categoryLoaded(reqContents));
  } catch (err) {
    yield put(reviewListLoadingError(err));
  }
}
// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js

  yield takeLatest(LOAD_REVIEW_ACTION, getReviews);
  yield takeLatest(LOAD_REVIEW_MORE, getReviewMore);
  yield takeLatest(LOAD_CATEGORY, getCategorys);
}
