/*
 *
 * ReviewDetailPage actions
 *
 */

import { DEFAULT_ACTION, 
        LOAD_ACTION, 
        LOAD_SUCCESS, 
        LOAD_SURVEY_SUCCESS, 
        LOAD_FAILURE,
        FOLLOW_ACTION,
        VOTE_ACTION,
        VOTE_SUCCESS,
        VOTE_ERROR,
        RESET_ACTION,
} from './constants';

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

export function loadedSurvey(data) {
  return {
    type: LOAD_SURVEY_SUCCESS,
    data,
  };
}

export function loadedFailure(error) {
  return {
    type: LOAD_FAILURE,
    error
  };
}

export function followAction(followId) {
  return {
    type: FOLLOW_ACTION,
    followId
  };
}

export function voteAction(reviewId) {
  return {
    type: VOTE_ACTION,
    reviewId
  };
}

export function voteSuccess(data) {
  return {
    type: VOTE_SUCCESS,
    data
  };
}

export function voteError(error) {
  return {
    type: VOTE_ERROR,
    error
  };
}

export function resetAction() {
  return {
    type: RESET_ACTION,
  }
}