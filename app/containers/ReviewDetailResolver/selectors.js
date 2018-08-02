import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the reviewDetailResolver state domain
 */

const selectReviewDetailResolverDomain = state =>
  state.get('reviewDetailResolver', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ReviewDetailResolver
 */

const makeSelectReviewDetailResolver = () =>
  createSelector(selectReviewDetailResolverDomain, substate => substate.toJS());

export default makeSelectReviewDetailResolver;
export { selectReviewDetailResolverDomain };
