import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import request from 'utils/request';
import {
  DEFAULT_ACTION,
  POST_ACTION,
  POST_SEND,
  POST_SUCCESS,
  POST_ERROR,
  LOAD_ACTION,
} from './constants';
import {
  postSendAction,
  postSuccess,
  postError,
  loadedSuccess,
  loadedFailure,
  loadedSurvey,
} from './actions';
// Individual exports for testing
export function* post(postData) {
  // console.log(postData);
  // console.log(postData.data);
  // console.log(postData.data.get('title'));
  // console.log(postData.data.get('mutifile'));

  // console.log(postData.data.entries());
  // console.log(postData.data.mutifile.entries());

  // console.log(signData.data.get('username'));
  // const requestURL = `http://api.getliter.io/review`;
  const requestURL = `${process.env.API_URL}/review`;
  // const requestURL = 'http://127.0.0.1:8080/hello/review';
  // const requestURL = `http://localhost:8080/review`;

  // console.log(requestURL);
  // const requestURL = `${process.env.API_URL}/review`;
  const accessToken = localStorage.getItem('accessToken');
  const token = `Bearer ${accessToken}`;
  try {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        // 'Content-Type': 'multipart/form-data;',
        'Access-Control-Allow-Origin': '*',
        Authorization: token,
      },
      data: postData.data,
    };

    // const req = request(request, requestURL, options);
    // prevent UI
    yield put(postSendAction());

    const repos = yield call(request, requestURL, options);

    // release UI
    yield put(postSuccess(repos));
    yield put(reposLoaded(repos, repos));

    // console.log(repos);

    if (repos && repos.id > 0) {
      // console.log('redirect');
      // console.log('redirect');
      // const reviewDetailUrl = '/review/' + repos.id;
      const reviewDetailUrl = '/';
      // yield put(NavigationActions.navigate({ routeName: reviewDetailUrl }));
      // yield put(NavigationActions.navigate({ routeName: reviewDetailUrl }));
      // console.log(reviewDetailUrl);
      yield put(push(reviewDetailUrl));
    }
  } catch (err) {
    yield put(postError(err));
    yield put(repoLoadingError(err));
  }
}

export function* postLoading(data) {
  const reviewId = data.reviewId;
  const requestURL = `${process.env.API_URL}/review/detail/${reviewId}`;
  const requestSurveyURL = `${process.env.API_URL}/review/survey/${reviewId}`;
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
    let reqContents = null;
    let reqSurvey = null;
    if (accessToken) {
      reqContents = yield call(request, requestURL, options);
      reqSurvey = yield call(request, requestSurveyURL, options);
    } else {
      reqContents = yield call(request, requestURL);
      reqSurvey = yield call(request, requestSurveyURL);
    }
    // const reqContents = yield call(request, requestURL, options);
    // const reqSurvey = yield call(request, requestSurveyURL, options);
    yield put(loadedSuccess(reqContents));
    yield put(loadedSurvey(reqSurvey));
  } catch (err) {
    yield put(loadedFailure(err));
  }
}

export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_ACTION, postLoading);
  yield takeLatest(POST_ACTION, post);
}
