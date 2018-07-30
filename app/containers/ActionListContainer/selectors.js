import { createSelector } from 'reselect';
import { initialState } from './reducer';

const actionListDomain = state => state.get('actionlist', initialState);

const makeSelectList = () =>
  createSelector(actionListDomain, actionListDomain =>
    actionListDomain.get('list'),
  );

const makeSelectListContents = () =>
  createSelector(actionListDomain, actionListDomain =>
    actionListDomain.getIn(['list', 'contents']),
  );

const makeSelectUserID = () =>
  createSelector(actionListDomain, actionListDomain =>
    actionListDomain.get('userid'),
  );

export {
  actionListDomain,
  makeSelectListContents,
  makeSelectList,
  makeSelectUserID,
};
