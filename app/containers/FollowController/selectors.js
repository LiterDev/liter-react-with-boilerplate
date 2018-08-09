import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the followController state domain
 */

const selectFollowControllerDomain = state =>
  state.get('followController', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by FollowController
 */

const makeSelectFollowController = () =>
  createSelector(selectFollowControllerDomain, substate => substate.toJS());

export default makeSelectFollowController;
export { selectFollowControllerDomain };
