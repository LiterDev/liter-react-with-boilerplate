import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the reviewFormEdit state domain
 */

const selectReviewFormEditDomain = state =>
  state.get('reviewFormEdit', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ReviewFormEdit
 */

const makeSelectReviewFormEdit = () =>
  createSelector(selectReviewFormEditDomain, substate => substate.toJS());

export default makeSelectReviewFormEdit;
export { selectReviewFormEditDomain };
