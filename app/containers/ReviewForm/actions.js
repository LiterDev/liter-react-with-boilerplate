/*
 *
 * ReviewForm actions
 *
 */

import { DEFAULT_ACTION, POST_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function postAction(data) {
  console.log(data.get('title'));
  return {
    type: POST_ACTION,
    data,
  };
}
