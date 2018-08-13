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
  LOAD_CATEGORY,
  LOAD_CATEGORY_SUCCESS,
} from './constants';

export function loadList() {
  // console.log(`reaview loadList === [ call ]`);
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

export function loadCategory() {
  return {
    type: LOAD_CATEGORY,
  };
}

export function categoryLoaded(data) {
  // console.log(`categoryLoaded data ====[ ${data}]`);
  return {
    type: LOAD_CATEGORY_SUCCESS,
    data,
  };
}
