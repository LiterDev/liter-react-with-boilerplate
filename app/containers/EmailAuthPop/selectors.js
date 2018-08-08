import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the emailAuthPop state domain
 */

const selectEmailAuthPopDomain = state =>
  state.get('emailAuthPop', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by EmailAuthPop
 */

const makeSelectEmailAuthPop = () =>
  createSelector(selectEmailAuthPopDomain, substate => substate.toJS());

export default makeSelectEmailAuthPop;
export { selectEmailAuthPopDomain };
