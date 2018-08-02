import { call, put, takeLatest } from 'redux-saga/effects';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import { request, requestRoot } from 'utils/request';
import { POST_ACTION } from './constants';

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
  const requestURL = `${requestRoot()}/review`;
  console.log(requestURL);
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
      body: postData.data,
    };

    // const req = request(request, requestURL, options);
    const repos = yield call(request, requestURL, options);
    yield put(reposLoaded(repos, repos));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(POST_ACTION, post);
}
