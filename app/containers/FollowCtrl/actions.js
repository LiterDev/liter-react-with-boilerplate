/*
 *
 * FollowCtrl actions
 *
 */

import { FOLLOW_ACTION, FOLLOW_SUCCESS, FOLLOW_FAILURE } from './constants';

export function followAction(userid) {
  return {
    type: FOLLOW_ACTION,
    userid,
  };
}

export function followSuccess(result) {
  return {
    type: FOLLOW_SUCCESS,
    result,
  };
}

export function followFailure(error) {
  return {
    type: FOLLOW_FAILURE,
    error,
  };
}
