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
      console.log(state);
      console.log(action);
      return state.set('userid', action.userid);
    case MYPAGE_SUCCESS:
      return state;
    case MYPAGE_FAILURE:
      return state;
    default:
      return state;
  }
}

export default myPageReducer;
