import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the followCtrl state domain
 */

const selectFollowCtrlDomain = state => state.get('followCtrl', initialState);

const makeSelectFollowCtrl = () =>
  createSelector(selectFollowCtrlDomain, substate => substate.toJS());

const makeSelectIsFollow = () =>
  createSelector(selectFollowCtrlDomain, substate => substate.get('isFollow'));

// export default makeSelectFollowCtrl;
export { makeSelectFollowCtrl, selectFollowCtrlDomain, makeSelectIsFollow };
