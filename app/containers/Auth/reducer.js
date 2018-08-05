/*
 *
 * Auth reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, AUTH_ACESS_VALID } from './constants';

export const initialState = fromJS({
  acessToken: false,
  refreshToken: false,
  resStatus: false,
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case AUTH_ACESS_VALID:
      return state;
    default:
      return state;
  }
}

export default authReducer;
