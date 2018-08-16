/*
 *
 * SignUp actions
 *
 */

import {
  DEFAULT_ACTION,
  SIGNUP_ACTION,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function signupAction(data) {
  return {
    type: SIGNUP_ACTION,
    data,
  };
}

export function signupLoaded(data) {
  return {
    type: SIGNUP_SUCCESS,
    data,
  };
}

export function signupError(data) {
  // console.log(data);
  return {
    type: SIGNUP_ERROR,
    data,
  };
}
