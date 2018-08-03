import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the myPage state domain
 */

const selectMyPageDomain = state => state.get('myPage', initialState);
const selectGlobal = state => state.get('global', initialState);
/**
 * Default selector used by MyPage
 */

const makeSelectMyPage = () =>
  createSelector(selectMyPageDomain, substate => substate.toJS());

const makeSelectUserData = () =>
  createSelector(selectGlobal, substate => substate.toJS());
// const makeSelectUsername = () =>
//   createSelector(selectMyPageDomain, substate => substate.get('username'));

export {
  selectGlobal,
  selectMyPageDomain,
  makeSelectMyPage,
  makeSelectUserData,
};
