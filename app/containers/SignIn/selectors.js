import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signIn state domain
 */

const selectSignInDomain = state => state.get('signIn', initialState);

/**
 * Other specific selectors
 */

const makeSelectSignInSuccess = () =>
  createSelector(selectSignInDomain, signupState =>
    signupState.get('signinSuccess'),
  );
const makeSelectSignInError = () =>
  createSelector(selectSignInDomain, signupState =>
    signupState.get('signinError'),
  );
const makeSelectSignInEnd = () =>
  createSelector(selectSignInDomain, signupState =>
    signupState.set({
      signinSuccess: false,
      signinError: false,
    }),
  );

/**
 * Default selector used by SignIn
 */

const makeSelectSignIn = () =>
  createSelector(selectSignInDomain, substate => substate.toJS());

export default makeSelectSignIn;
export {
  selectSignInDomain,
  makeSelectSignIn,
  makeSelectSignInSuccess,
  makeSelectSignInError,
  makeSelectSignInEnd,
};
