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

export function myPageSuccess(result) {
  console.log('myPageSuccess');
  return {
    type: MYPAGE_SUCCESS,
    result,
  };
}

export function myPageFailure(error) {
  console.log('myPageFailure');
  return {
    type: MYPAGE_FAILURE,
    error,
  };
}
