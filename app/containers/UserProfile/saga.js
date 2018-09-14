import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  DEFAULT_ACTION,
  LOAD_USER_DETAIL,
  LOAD_USER_DETAIL_SUCCESS,
  LOAD_USER_DETAIL_ERROR,
} from './constants';
import { loadUserDetailSuccess, loadUserDetailError, loadUserAddressSuccess } from './actions';
// Individual exports for testing

export function* getUserDetail() {
  const requestURL = `${process.env.API_URL}/user/detailInfo`;
  const requestAddrURL = `${process.env.API_URL}/user/addrInfo`;
  const accessToken = localStorage.getItem('accessToken');

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
    try {
      
      const responseAddr = yield call(request, requestAddrURL, options);
      yield put(loadUserAddressSuccess(responseAddr));

      const response = yield call(request, requestURL, options);
      yield put(loadUserDetailSuccess(response));

    } catch (err) {
      yield put(loadUserDetailError(err));
    }
  }
}
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_USER_DETAIL, getUserDetail);
}
