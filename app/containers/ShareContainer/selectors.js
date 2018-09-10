import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the shareContainer state domain
 */

const selectShareContainerDomain = state =>
  state.get('shareContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ShareContainer
 */

const makeSelectShareContainer = () =>
  createSelector(selectShareContainerDomain, substate => substate.toJS());

export default makeSelectShareContainer;
export { selectShareContainerDomain };
