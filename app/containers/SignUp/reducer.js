/*
 *
 * SignUp reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SIGNUP_ACTION,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from './constants';

export const initialState = fromJS({
  signupRes: false,
  signupError: false,
});

function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SIGNUP_ACTION:
      return state.set('signupRes', false).set('signupError', false);
    case SIGNUP_SUCCESS:
      return state.set('signupError', false).set('signupRes', action.data);
    case SIGNUP_ERROR:
      return state.set('signupError', action.data).set('signupRes', false);
    default:
      return state;
  }
}

export default signUpReducer;
