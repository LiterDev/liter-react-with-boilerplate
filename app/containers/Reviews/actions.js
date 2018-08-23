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
  VOTE_ACTION,
  VOTE_SUCCESS,
  VOTE_ERROR
} from './constants';

export function loadList(cateValue) {
  // console.log(`reaview loadList === [ ${cateValue} ]`);
  return {
    type: LOAD_REVIEW_ACTION,
    cateValue,
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

export function loadListMore(cateValue) {
  return {
    type: LOAD_REVIEW_MORE,
    cateValue,
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
