/*
 *
 * ReviewForm actions
 *
 */

import {
  DEFAULT_ACTION,
  POST_ACTION,
  POST_SEND,
  POST_SUCCESS,
  POST_ERROR,
  LOAD_ACTION,
  LOAD_SUCCESS,
  LOAD_SURVEY_SUCCESS,
  LOAD_FAILURE,
  LOAD_INIT,
} from './constants';

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

export function loadedSurvey(data) {
  return {
    type: LOAD_SURVEY_SUCCESS,
    data,
  };
}
export function loadedFailure(error) {
  return {
    type: LOAD_FAILURE,
    error,
  };
}

export function loadInit() {
  return {
    type: LOAD_INIT,
  };
}
