/*
 *
 * ActionListContainer actions
 *
 */

import { LOAD_LIST, LOAD_LIST_SUCCESS, LOAD_LIST_ERROR } from './constants';

export function loadList() {
  return {
    type: LOAD_LIST,
  };
}

export function listLoaded(list, userid) {
  return {
    type: LOAD_LIST_SUCCESS,
    list,
    userid,
  };
}

export function listLoadingError(error) {
  return {
    type: LOAD_LIST_ERROR,
    error,
  };
}
