/*
 *
 * SignIn actions
 *
 */

import {
  DEFAULT_ACTION,
  SIGNIN_ACTION,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function signinAction(email, password) {
  return {
    type: SIGNIN_ACTION,
    email,
    password,
  };
}

export function signinSuccess(data) {
  return {
    type: SIGNIN_SUCCESS,
    data,
  };
}

export function signinError(data) {
  return {
    type: SIGNIN_ERROR,
    data,
  };
}
