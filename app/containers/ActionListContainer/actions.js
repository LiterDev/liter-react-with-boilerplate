/*
 *
 * ActionListContainer actions
 *
 */

import {
  LOAD_LIST,
  LOAD_LIST_SUCCESS,
  LOAD_LIST_ERROR,
  SET_FOLLOW,
  SET_FOLLOWED_SUCCESS,
  SET_FOLLOWED_ERROR,
  SET_UNFOLLOW,
} from './constants';

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

export function setFollow(followid) {
  return {
    type: SET_FOLLOW,
    followid,
  };
}

export function setUnFollow(followid) {
  return {
    type: SET_UNFOLLOW,
    followid,
  };
}

export function setFollowedSuccess(data) {
  return {
    type: SET_FOLLOWED_SUCCESS,
    data,
  };
}

export function setFollowedError(error) {
  return {
    type: SET_FOLLOWED_ERROR,
    error,
  };
}
