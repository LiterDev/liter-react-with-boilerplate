import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the slideTest state domain
 */

const selectSlideTestDomain = state => state.get('slideTest', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SlideTest
 */

const makeSelectSlideTest = () =>
  createSelector(selectSlideTestDomain, substate => substate.toJS());

export default makeSelectSlideTest;
export { selectSlideTestDomain };
