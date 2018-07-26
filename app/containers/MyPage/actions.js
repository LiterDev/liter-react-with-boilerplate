/*
 *
 * MyPage actions
 *
 */

import { DEFAULT_ACTION, MYPAGE_ACTION } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function mypageAction(data) {
  // console.log('mypageAction');
  return {
    type: MYPAGE_ACTION,
    data,
  };
}
