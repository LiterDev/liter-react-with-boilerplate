/*
 *
 * EmailAuthPop reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SEND_EMAIL_AUTH,
  EMAIL_AUTH_SUCCESS,
} from './constants';

export const initialState = fromJS({});

function emailAuthPopReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SEND_EMAIL_AUTH:
      return state;
    case EMAIL_AUTH_SUCCESS:
      localStorage.setItem('sendEmailSuccessTime', action.data.time);
      return state;
    default:
      return state;
  }
}

export default emailAuthPopReducer;
