/*
 *
 * FollowController actions
 *
 */

import { DEFAULT_ACTION, FOLLOW_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function handleFollow() {
  return {
    type: FOLLOW_ACTION,
  };
}