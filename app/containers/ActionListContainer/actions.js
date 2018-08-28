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

export function loadList(followType, userId) {
  return {
    type: LOAD_LIST,
    followType,
    userId,
  };
}

export function listLoaded(list) {
  return {
    type: LOAD_LIST_SUCCESS,
    list,
  };
}

export function listLoadingError(error) {
  return {
    type: LOAD_LIST_ERROR,
    error,
  };
}

export function setFollow(followid, followType, userId) {
  return {
    type: SET_FOLLOW,
    followid,
    followType, 
    userId,
  };
}

export function setUnFollow(followid, followType, userId) {
  return {
    type: SET_UNFOLLOW,
    followid,
    followType, 
    userId,
  };
}

export function setFollowedSuccess(data, fType) {
  return {
    type: SET_FOLLOWED_SUCCESS,
    data,
    fType,
  };
}

export function setFollowedError(error) {
  return {
    type: SET_FOLLOWED_ERROR,
    error,
  };
}
