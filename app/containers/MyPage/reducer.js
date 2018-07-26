/*
 *
 * MyPage reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, MYPAGE_ACTION } from './constants';

export const initialState = fromJS({
  username: '',
  id: '',
  data: [],
});

function myPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case MYPAGE_ACTION:
      return state;
    default:
      return state;
  }
}

export default myPageReducer;
