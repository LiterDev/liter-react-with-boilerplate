/*
 *
 * SignUp reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, SIGNUP_ACTION } from './constants';

export const initialState = fromJS({});

function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SIGNUP_ACTION:
      return state;
    default:
      return state;
  }
}

export default signUpReducer;
