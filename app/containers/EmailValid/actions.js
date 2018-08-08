/*
 *
 * EmailValid actions
 *
 */

import {
  DEFAULT_ACTION,
  VALID_ACTION,
  VALID_SUCCESS,
  VALID_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function validAction(validString) {
  return {
    type: VALID_ACTION,
    validString,
  };
}

export function validSuccess(data) {
  // console.log(data);
  return {
    type: VALID_SUCCESS,
    data,
  };
}

export function validError(data) {
  return {
    type: VALID_ERROR,
    data,
  };
}
