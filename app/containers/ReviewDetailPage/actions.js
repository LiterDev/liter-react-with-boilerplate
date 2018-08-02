/*
 *
 * ReviewDetailPage actions
 *
 */

import { DEFAULT_ACTION, LOAD_ACTION, LOAD_SUCCESS, LOAD_FAILURE } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadAction(reviewId) {
  return {
    type: LOAD_ACTION,
    reviewId,
  };
}

export function loadedSuccess(data) {
  return {
    type: LOAD_SUCCESS,
    data,
  };
}

export function loadedFailure(error) {
  return {
    type: LOAD_FAILURE,
    error
  };
}
