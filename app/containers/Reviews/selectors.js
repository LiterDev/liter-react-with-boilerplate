import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the reviews state domain
 */

const selectReviewsDomain = state => state.get('reviews', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Reviews
 */

const makeSelectReviews = () =>
  createSelector(selectReviewsDomain, substate => substate.toJS());

export default makeSelectReviews;
export { selectReviewsDomain };
