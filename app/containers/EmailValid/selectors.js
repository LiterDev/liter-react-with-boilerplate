import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the emailValid state domain
 */

const selectEmailValidDomain = state => state.get('emailValid', initialState);

/**
 * Other specific selectors
 */
const makeSelectEmailValidSuccess = () =>
  createSelector(selectEmailValidDomain, vaidState =>
    vaidState.get('validSuccess'),
  );
const makeSelectEmailValidError = () =>
  createSelector(selectEmailValidDomain, vaidState =>
    vaidState.get('validError'),
  );

/**
 * Default selector used by EmailValid
 */

const makeSelectEmailValid = () =>
  createSelector(selectEmailValidDomain, substate => substate.toJS());

export default makeSelectEmailValid;
export {
  selectEmailValidDomain,
  makeSelectEmailValid,
  makeSelectEmailValidSuccess,
  makeSelectEmailValidError,
};
