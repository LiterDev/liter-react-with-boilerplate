import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the reviewForm state domain
 */

const selectReviewFormDomain = state => state.get('reviewForm', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ReviewForm
 */

const makeSelectReviewForm = () =>
  createSelector(selectReviewFormDomain, substate => substate.toJS());

export default makeSelectReviewForm;
export { selectReviewFormDomain };
