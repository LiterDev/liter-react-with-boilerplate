import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the followActionPage state domain
 */

const selectFollowActionPageDomain = state =>
  state.get('actionPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by FollowActionPage
 */

const makeSelectFollowActionPage = () =>
  createSelector(selectFollowActionPageDomain, substate => substate.toJS());

const makeSelectUserID = () =>
  createSelector(selectFollowActionPageDomain, substate =>
    substate.get('userid'),
  );

export {
  selectFollowActionPageDomain,
  makeSelectFollowActionPage,
  makeSelectUserID,
};
