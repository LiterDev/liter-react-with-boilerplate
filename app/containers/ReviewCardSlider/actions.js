/*
 *
 * ReviewCardSlider actions
 *
 */

import {
  LOAD_REVIEW_ACTION,
  LOAD_REVIEW_SUCCESS,
  LOAD_REVIEW_ERROR,
} from './constants';

export function loadList(userid) {
  return {
    type: LOAD_REVIEW_ACTION,
    userid,
  };
}

export function reviewListLoaded(data) {
  return {
    type: LOAD_REVIEW_SUCCESS,
    data,
  };
}

export function reviewListLoadingError(error) {
  return {
    type: LOAD_REVIEW_ERROR,
    error,
  };
}