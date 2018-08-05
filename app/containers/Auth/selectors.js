import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the auth state domain
 */

const selectAuthDomain = state => state.get('auth', initialState);

const makeAuthAcessValid = () =>
  createSelector(selectAuthDomain, substate => substate.toJS());

/**
 * Other specific selectors
 */

/**
 * Default selector used by Auth
 */

const makeSelectAuth = () =>
  createSelector(selectAuthDomain, substate => substate.toJS());

export default makeSelectAuth;
export { selectAuthDomain, makeSelectAuth, makeAuthAcessValid };
