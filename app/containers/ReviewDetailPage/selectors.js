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
const makeSelectReviews = () =>
  createSelector(selectReviewDetailPageDomain, substate => substate.get('reviews'));

const makeSelectReviewId = () =>
  createSelector(selectReviewDetailPageDomain, substate => substate.get('reviewId'));

export { selectReviewDetailPageDomain, makeSelectReviewId, makeSelectReviews };
