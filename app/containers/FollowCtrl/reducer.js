/*
 *
 * FollowCtrl reducer
 *
 */

import { fromJS } from 'immutable';
import { FOLLOW_ACTION, FOLLOW_SUCCESS, FOLLOW_FAILURE } from './constants';

export const initialState = fromJS({
  userid: false,
  isFollow: false,
});

function followCtrlReducer(state = initialState, action) {
  switch (action.type) {
    case FOLLOW_ACTION:
      console.log(action);
      return state.set('userid', action.userid);
    case FOLLOW_SUCCESS:
      return state;
    case FOLLOW_FAILURE:
      return state;
    default:
      return state;
  }
}

export default followCtrlReducer;
