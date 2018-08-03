/*
 *
 * ReviewForm actions
 *
 */

import { DEFAULT_ACTION, POST_ACTION, POST_SEND, POST_SUCCESS, POST_ERROR } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function postAction(data) {
  console.log(data.get('title'));
  return {
    type: POST_ACTION,
    data,
  };
}

export function postSendAction() {
  return {
    type: POST_SEND,
  };
}
export function postSuccess(data) {
  return {
    type: POST_SUCCESS,
    data,
  };
}
export function postError(error) {
  return {
    type: POST_ERROR,
    error,
  };
}
