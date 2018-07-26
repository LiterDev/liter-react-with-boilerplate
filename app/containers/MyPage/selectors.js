import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the myPage state domain
 */

const selectMyPageDomain = state => state.get('myPage', initialState);

/**
 * Default selector used by MyPage
 */

const makeSelectMyPage = () =>
  createSelector(selectMyPageDomain, substate => substate.toJS());

// const makeSelectUsername = () =>
//   createSelector(selectMyPageDomain, substate => substate.get('username'));

export { selectMyPageDomain, makeSelectMyPage };
