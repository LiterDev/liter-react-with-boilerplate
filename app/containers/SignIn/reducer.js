/*
 *
 * SignIn reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SIGNIN_ACTION,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNIN_INIT,
} from './constants';

export const initialState = fromJS({
  signinSuccess: false,
  signinError: false,
});

function signInReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state.set('signinError', false).set('signinSuccess', false);
    case SIGNIN_ACTION:
      return state.set('signinError', false).set('signinSuccess', false);
    case SIGNIN_SUCCESS:
      return state.set('signinError', false).set('signinSuccess', action.data);
    case SIGNIN_ERROR:
      return state.set('signinError', action.data).set('signinSuccess', false);
    case SIGNIN_INIT:
      return state.set('signinError', false).set('signinSuccess', false);
    default:
      return state;
  }
}

export default signInReducer;
