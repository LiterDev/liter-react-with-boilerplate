import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the reviewCardBottomBar state domain
 */

const selectReviewCardBottomBarDomain = state =>
  state.get('reviewCardBottomBar', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ReviewCardBottomBar
 */

const makeSelectReviewCardBottomBar = () =>
  createSelector(selectReviewCardBottomBarDomain, substate => substate.toJS());

export default makeSelectReviewCardBottomBar;
export { selectReviewCardBottomBarDomain };
