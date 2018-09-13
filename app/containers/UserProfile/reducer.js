/*
 *
 * UserProfile reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_USER_DETAIL,
  LOAD_USER_DETAIL_SUCCESS,
  LOAD_USER_DETAIL_ERROR,
} from './constants';

export const initialState = fromJS({
  userDetail: false,
  loading: false,
});

function userProfileReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_USER_DETAIL:
      return state.set('loading', true).set('error', false);
    case LOAD_USER_DETAIL_SUCCESS:
      console.log(action.data);
      return state
        .set('loading', false)
        .set('error', false)
        .set('userDetail', action.data);
    case LOAD_USER_DETAIL_ERROR:
      return state.set('loading', false).set('error', true);
    default:
      return state;
  }
}

export default userProfileReducer;
