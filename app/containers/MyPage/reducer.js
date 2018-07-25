/*
 *
 * MyPage reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, CHANGE_USERNAME } from './constants';

export const initialState = fromJS({
  username: '',
});

function myPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state.set('username', action.name.replace(/@/gi, ''));
    default:
      return state;
  }
}

export default myPageReducer;
