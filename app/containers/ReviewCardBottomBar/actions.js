/*
 *
 * ReviewCardBottomBar actions
 *
 */

import { DEFAULT_ACTION, VOTE_ACTION, VOTE_SUCCESS, VOTE_ERROR } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function voteAction(data, ownId) {
  return {
    type: VOTE_ACTION,
    data,
    ownId,
  };
}

export function voteSuccess(data) {
  return {
    type: VOTE_SUCCESS,
    data,
  };
}

export function voteError(error) {
  return {
    type: VOTE_ERROR,
    error,
  };
}
