import {
  all,
  call,
  put,
  fork,
  select,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import request from 'utils/request';

import {
  reviewListLoaded,
  reviewListLoadingError,
  voteSuccess,
  voteError,
} from './actions';
import {
  LOAD_REVIEW_ACTION,
  LOAD_REVIEW_MORE,
  LOAD_CATEGORY,
  VOTE_ACTION,
  UPDATE_REVIEW,
  UPDATE_FOLLOW,
  LOAD_REVIEW_ACTION_SEARCH,
} from './constants';

import {
  loadListMoreSuccess,
  loadListMoreError,
  categoryLoaded,
  updatedReview,
} from './actions';

import makeSelectReviews from './selectors';

export function* getReviews(data) {
  console.log(data);

  let cateValue = data.cateValue;
  console.log(`saga getReviews === [ ${cateValue} ]`);
  if (!Boolean(cateValue) && cateValue != 0) {
    const reviews = yield select(makeSelectReviews());
    cateValue = reviews.categoryId;
  }
  console.log(`saga getReviews === [ ${cateValue} ]`);
  console.log(`saga getReviews === [ ${data.searchValue} ]`);

  const requestURL = `${
    process.env.API_URL
  }/review/latestList?page=1&categoryId=${cateValue}${
    Boolean(data.searchValue) ? '&searchValue=' + data.searchValue : ''
  }`;
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
  // console.log(data);
  console.log(`saga getReviewMore === [ ${data.cateValue} ]`);
  console.log(`saga getReviewMore === [ ${data.searchValue} ]`);
  const reviews = yield select(makeSelectReviews());
  let cateValue = data.cateValue;
  // console.log(`saga getReviews === [ ${cateValue} ]`);
  // if (!Boolean(cateValue) && cateValue != 0) {
  //   cateValue = reviews.categoryId;
  // }
  const curPage = reviews.page + 1;
  const requestURL = `${
    process.env.API_URL
  }/review/latestList?page=${curPage}&categoryId=${data.cateValue}`;
  const accessToken = localStorage.getItem('accessToken');
  // const token = `Bearer ${accessToken}`;
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json;charset=UTF-8',
  //     'Content-Type': 'application/json;charset=UTF-8',
  //     'Access-Control-Allow-Origin': '*',
  //     Authorization: token,
  //   },
  // };

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
    // const reqContents = yield call(request, requestURL);
    const reqContents = yield call(request, requestURL, options);
    yield put(loadListMoreSuccess(reqContents));
  } catch (err) {}
}

export function* sagaVote(data) {
  // console.log(']]]]] saga [[[[[[----------do Vote');
  // console.log(data);
  const reviewId = data.reviewId;

  const requestURL = `${process.env.API_URL}/engagement`;
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
      data: JSON.stringify({
        reviewId: reviewId,
      }),
    };
    const reqContents = yield call(request, requestURL, options);
    // console.log('Vote Success <<<<<<<<<<<<<<<<<<<<');
    // console.log(reqContents);

    ////////////////////////////////////////////////////////////////////////
    const requestURL2 = `${process.env.API_URL}/review/detail/${reviewId}`;
    const options2 = {
      method: 'GET',
      headers: {
        Accept: 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Authorization: token,
      },
    };
    const review = yield call(request, requestURL2, options2);
    ////////////////////////////////////////////////////////////////////////

    yield put(voteSuccess(review));
    // yield put(voteSuccess(reqContents));
  } catch (err) {
    yield put(voteError(err));
    console.log('Vote Failure <<<<<<<<<<<<<<<<<<<<');
    console.log(err.response.status);
  }
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

export function* updateReview(data) {
  // console.log(']]]]] saga [[[[[[----------update Review');
  // console.log(data);
  const reviewId = data.reviewId;

  const accessToken = localStorage.getItem('accessToken');
  const token = `Bearer ${accessToken}`;
  const requestURL = `${process.env.API_URL}/review/detail/${reviewId}`;
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
    const ur = yield call(request, requestURL, options);
    // console.log(ur);
    yield put(updatedReview(ur));
  } catch (err) {
    console.log(err);
  }
}

export function* updateFollow(data) {
  const pageList = yield select(makeSelectReviews());
  const reviews = pageList.reviews;

  yield all(
    reviews.map(item => {
      if (item.user.id === data.followId) {
        // console.log(item.id);
        return call(updateReview, { reviewId: item.id });
      }
    }),
  );
  // console.log(pageList.reviews);
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js

  yield takeLatest(LOAD_REVIEW_ACTION, getReviews);
  yield takeLatest(LOAD_REVIEW_MORE, getReviewMore);
  yield takeLatest(LOAD_CATEGORY, getCategorys);
  yield takeLatest(VOTE_ACTION, sagaVote);
  yield takeLatest(UPDATE_FOLLOW, updateFollow);
  yield takeLatest(LOAD_REVIEW_ACTION_SEARCH, getReviews);
  yield takeEvery(UPDATE_REVIEW, updateReview);
}
