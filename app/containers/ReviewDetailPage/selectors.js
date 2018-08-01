import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the reviewDetailPage state domain
 */

const selectReviewDetailPageDomain = state =>
  state.get('reviewDetailPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ReviewDetailPage
 */

const makeSelectReviewDetailPage = () =>
  createSelector(selectReviewDetailPageDomain, substate => substate.toJS());

export default makeSelectReviewDetailPage;
export { selectReviewDetailPageDomain };
