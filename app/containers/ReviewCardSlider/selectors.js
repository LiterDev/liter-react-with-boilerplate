import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the reviewCardSlider state domain
 */

const selectReviewCardSliderDomain = state =>
  state.get('reviewCardSlider', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ReviewCardSlider
 */

const makeSelectReviewCardSlider = () =>
  createSelector(selectReviewCardSliderDomain, substate => substate.toJS());

export default makeSelectReviewCardSlider;
export { selectReviewCardSliderDomain };
