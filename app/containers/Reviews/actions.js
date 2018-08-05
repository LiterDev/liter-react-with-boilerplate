/*
 *
 * Reviews actions
 *
 */

import {
  LOAD_REVIEW_ACTION,
  LOAD_REVIEW_SUCCESS,
  LOAD_REVIEW_ERROR,
  LOAD_REVIEW_MORE,
  LOAD_REVIEW_MORE_SUCCESS,
  LOAD_REVIEW_MORE_ERROR,
} from './constants';

export function loadList() {
  return {
    type: LOAD_REVIEW_ACTION,
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

export function loadListMore() {
  return {
    type: LOAD_REVIEW_MORE,
  };
}

export function loadListMoreSuccess(data) {
  return {
    type: LOAD_REVIEW_MORE_SUCCESS,
    data,
  };
}

export function loadListMoreError(error) {
  return {
    type: LOAD_REVIEW_MORE_ERROR,
    error,
  };
}

