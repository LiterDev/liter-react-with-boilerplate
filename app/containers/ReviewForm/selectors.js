import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the reviewForm state domain
 */

const selectReviewFormDomain = state => state.get('reviewForm', initialState);

/**
 * Other specific selectors
 */
const makeSelectReviews = () =>
  createSelector(selectReviewFormDomain, substate => substate.get('reviews'));

const makeSelectReviewId = () =>
  createSelector(selectReviewFormDomain, substate => substate.get('reviewId'));

const makeSelectSurveys = () =>
  createSelector(selectReviewFormDomain, substate => substate.get('surveys'));

const makeSelectError = () =>
  createSelector(selectReviewFormDomain, substate => substate.get('error'));
/**
 * Default selector used by ReviewForm
 */

const makeSelectReviewForm = () =>
  createSelector(selectReviewFormDomain, substate => substate.toJS());

export default makeSelectReviewForm;
export {
  selectReviewFormDomain,
  makeSelectReviewForm,
  makeSelectReviewId,
  makeSelectReviews,
  makeSelectSurveys,
  makeSelectError,
};
