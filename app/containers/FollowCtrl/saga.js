import { select, call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { FOLLOW_ACTION } from './constants';
import * as actions from './actions';
import { makeSelectUserID } from '../ActionListContainer/selectors';

export function* setFollowSagaData(userid) {
  const selectid = yield select(makeSelectUserID());
  // console.log(userid);

  if (false) {
    if (selectid === userid) {
      // console.log(selectid);
      const requestURL = `${process.env.API_URL}/user/follow`;
      try {
        const options = {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          data: JSON.stringify({
            userid,
          }),
        };
        const detail = yield call(request, requestURL, options);
        yield put(actions.followSuccess(detail));
      } catch (error) {
        yield put(actions.followFailure(error));
      }
    }
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(FOLLOW_ACTION, setFollowSagaData);
}
