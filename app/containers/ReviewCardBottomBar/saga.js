import { take, call, fork, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { DEFAULT_ACTION, VOTE_ACTION } from './constants';
import makeSelectReviewCardBottomBar from './selectors';
import { voteSuccess, voteError } from './actions';

export function* voteProcess(postData, ownId) {

  console.log("]---------------- voteProcess -------------[");
  console.log(ownId);
  const requestURL = `${process.env.API_URL}/engagement`;
  const accessToken = localStorage.getItem('accessToken');
  const token = `Bearer ${accessToken}`;
  try {
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json;charset=UTF-8',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        Authorization: token,
      },
      body: JSON.stringify({
        reviewId: postData.data,
      }),
    };
    const repos = yield call(request, requestURL, options);
    yield put(voteSuccess(repos));
  } catch(err) {
    yield put(voteError(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(VOTE_ACTION, voteProcess);
}
