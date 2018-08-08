/*
 *
 * EmailAuthPop actions
 *
 */

import {
  DEFAULT_ACTION,
  SEND_EMAIL_AUTH,
  EMAIL_AUTH_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function sendEmailAuth() {
  console.log('auth action sendEmailAuth');
  return {
    type: SEND_EMAIL_AUTH,
  };
}

export function emailAuthSuccess(data) {
  return {
    type: EMAIL_AUTH_SUCCESS,
    data,
  };
}
