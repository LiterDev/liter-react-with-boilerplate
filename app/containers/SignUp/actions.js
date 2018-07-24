/*
 *
 * SignUp actions
 *
 */

import { DEFAULT_ACTION, SIGNUP_ACTION } from './constants';

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
