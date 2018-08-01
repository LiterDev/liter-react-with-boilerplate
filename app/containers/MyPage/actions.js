/*
 *
 * MyPage actions
 *
 */

import { MYPAGE_ACTION, MYPAGE_SUCCESS, MYPAGE_FAILURE } from './constants';

export function myPageAction(data) {
  console.log('myPageAction');
  return {
    type: MYPAGE_ACTION,
    data,
  };
}

export function myPageSuccess(data) {
  console.log('myPageSuccess');
  console.log(data);
  return {
    type: MYPAGE_SUCCESS,
    data,
  };
}

export function myPageFailure(error) {
  console.log('myPageFailure');
  return {
    type: MYPAGE_FAILURE,
    error,
  };
}
