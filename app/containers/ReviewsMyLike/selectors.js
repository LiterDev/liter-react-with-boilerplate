import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the reviewsMyLike state domain
 */

const selectReviewsMyLikeDomain = state =>
  state.get('reviewsMyLike', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ReviewsMyLike
 */

const makeSelectReviewsMyLike = () =>
  createSelector(selectReviewsMyLikeDomain, substate => substate.toJS());

export default makeSelectReviewsMyLike;
export { selectReviewsMyLikeDomain };
