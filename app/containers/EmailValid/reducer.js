/*
 *
 * EmailValid reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  VALID_ACTION,
  VALID_SUCCESS,
  VALID_ERROR,
} from './constants';

export const initialState = fromJS({
  validSuccess: false,
  validError: false,
});

function emailValidReducer(state = initialState, action) {
  // console.log('reducer');
  // console.log(action.data);
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case VALID_ACTION:
      return state.set('validSuccess', false).set('validError', false);
    case VALID_SUCCESS:
      return state.set('validSuccess', action.data).set('validError', false);
    case VALID_ERROR:
      return state.set('validSuccess', false).set('validError', action.data);
    default:
      return state;
  }
}

export default emailValidReducer;
