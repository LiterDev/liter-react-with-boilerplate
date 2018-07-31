import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the followingActionPage state domain
 */

const selectFollowingActionPageDomain = state =>
  state.get('actionPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by FollowingActionPage
 */

const makeSelectFollowingActionPage = () =>
  createSelector(selectFollowingActionPageDomain, substate => substate.toJS());

const makeSelectUserID = () =>
  createSelector(selectFollowingActionPageDomain, substate =>
    substate.get('userid'),
  );

const makeSelectPageType = () =>
  createSelector(selectFollowingActionPageDomain, substate =>
    substate.get('followType'),
  );

export {
  selectFollowingActionPageDomain,
  makeSelectFollowingActionPage,
  makeSelectUserID,
  makeSelectPageType,
};
