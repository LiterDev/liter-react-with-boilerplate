import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signUp state domain
 */

const selectSignUpDomain = state => state.get('signUp', initialState);

/**
 * Other specific selectors
 */

const makeSelectSignUpRes = () =>
  createSelector(selectSignUpDomain, signupState =>
    signupState.get('signupRes'),
  );
const makeSelectSignUpError = () =>
  createSelector(selectSignUpDomain, signupState =>
    signupState.get('signupError'),
  );

/**
 * Default selector used by SignUp
 */

const makeSelectSignUp = () =>
  createSelector(selectSignUpDomain, substate => substate.toJS());

// export default makeSelectSignUp;
export {
  selectSignUpDomain,
  makeSelectSignUp,
  makeSelectSignUpRes,
  makeSelectSignUpError,
};
