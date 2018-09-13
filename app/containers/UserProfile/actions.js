/*
 *
 * UserProfile actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_USER_DETAIL,
  LOAD_USER_DETAIL_SUCCESS,
  LOAD_USER_DETAIL_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadUserDetail() {
  return {
    type: LOAD_USER_DETAIL,
  };
}
export function loadUserDetailSuccess(data) {
  return {
    type: LOAD_USER_DETAIL_SUCCESS,
    data,
  };
}
export function loadUserDetailError(data) {
  return {
    type: LOAD_USER_DETAIL_ERROR,
    data,
  };
}
