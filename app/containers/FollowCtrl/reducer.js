/*
 *
 * FollowCtrl reducer
 *
 */

import { fromJS } from 'immutable';
import { FOLLOW_ACTION, FOLLOW_SUCCESS, FOLLOW_FAILURE } from './constants';

export const initialState = fromJS({
  followid: false,
  userid: false,
  isFollow: false,
});

function followCtrlReducer(state = initialState, action) {
  switch (action.type) {
    case FOLLOW_ACTION:
      // return state.set('userid', action.userid);
      return state;
    case FOLLOW_SUCCESS:
      return state;
    case FOLLOW_FAILURE:
      return state;
    default:
      return state;
  }
}

export default followCtrlReducer;
