/*
 *
 * MyPage reducer
 *
 */

import { fromJS } from 'immutable';
import { MYPAGE_ACTION, MYPAGE_SUCCESS, MYPAGE_FAILURE } from './constants';

export const initialState = fromJS({
  userid: false,
});

function myPageReducer(state = initialState, action) {
  switch (action.type) {
    case MYPAGE_ACTION:
      console.log(action.data.username);
      return state;
    case MYPAGE_SUCCESS:
      return state;
    case MYPAGE_FAILURE:
      return state;
    default:
      return state;
  }
}

export default myPageReducer;
