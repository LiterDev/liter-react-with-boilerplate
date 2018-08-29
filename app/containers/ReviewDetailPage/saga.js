import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { makeSelectReviewId } from './selectors';

import {
  loadedSuccess,
  loadedFailure,
  loadedSurvey,
  voteSuccess,
  voteError,
} from './actions';
import { LOAD_ACTION, FOLLOW_ACTION, VOTE_ACTION } from './constants';

export function* getReview(data) {
  // const reviewId = yield select(makeSelectReviewId());
  // console.log(`getReview.data =====[ ${data.reviewId}]`);
  const reviewId = data.reviewId;
  const requestURL = `${process.env.API_URL}/review/detail/${reviewId}`;
  const requestSurveyURL = `${process.env.API_URL}/review/survey/${reviewId}`;
  const accessToken = localStorage.getItem('accessToken');
  // const token = `Bearer ${accessToken}`;
  let options = null;
  if (accessToken) {
    const token = `Bearer ${accessToken}`;
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
    // const reqContents = yield call(request, requestURL, options);
    
    const reqContents = yield call(request, requestURL, options);
    const reqSurvey = yield call(request, requestSurveyURL, options);
    yield put(loadedSuccess(reqContents));
    yield put(loadedSurvey(reqSurvey));
  } catch (err) {
    yield put(loadedFailure(err));
  }
}

export function* sagaFollow(data) {
  // console.log(']]]]] saga [[[[[[----------do Follow');
  // console.log(data);
  const followId = data.followId;
  const requestURL = `${process.env.API_URL}/follow/`;
  const accessToken = localStorage.getItem('accessToken');
  const token = `Bearer ${accessToken}`;
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json;charset=UTF-8',
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      Authorization: token,
    },
    data: JSON.stringify({
      followId,
    }),
  };

  try {
    // Call our request helper (see 'utils/request')
    const reqContents = yield call(request, requestURL, options);
    // console.log('Follow Success <<<<<<<<<<<<<<<<<<<<');
    // console.log(reqContents);
    // yield put(setFollowedSuccess(reqContents));
  } catch (err) {
    console.log('Follow Failure <<<<<<<<<<<<<<<<<<<<');
    // yield put(setFollowedError(err));
    // yield put(setFollowedError(err));
  }
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

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_ACTION, getReview);
  yield takeLatest(FOLLOW_ACTION, sagaFollow);
  yield takeLatest(VOTE_ACTION, sagaVote);
}
