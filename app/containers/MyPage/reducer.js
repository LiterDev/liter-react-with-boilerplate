/*
 *
 * MyPage reducer
 *
 */

import { fromJS } from 'immutable';
import { MYPAGE_ACTION, MYPAGE_SUCCESS, MYPAGE_FAILURE } from './constants';

export const initialState = fromJS({
  myPages: false,
  loading: false,
  error: false,
});

function myPageReducer(state = initialState, action) {
  switch (action.type) {
    case MYPAGE_ACTION:
      return state.set('loading', true).set('error', false);
    case MYPAGE_SUCCESS:
      console.log(action);
      return state
        .set('loading', false)
        .set('error', false)
        .set('myPages', action.data.content);
    case MYPAGE_FAILURE:
      return state;
    default:
      return state;
  }
}

export default myPageReducer;
