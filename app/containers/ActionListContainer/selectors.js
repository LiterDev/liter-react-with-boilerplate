import { createSelector } from 'reselect';
import { initialState } from './reducer';

const actionListDomain = state => state.get('actionlist', initialState);

const makeSelectList = () =>
  createSelector(actionListDomain, actionListDomain =>
    actionListDomain.get('list'),
  );

const makeSelectListContents = () =>
  createSelector(actionListDomain, contentState =>
    // contentState.getIn(['list', 'contents']),
    contentState.get('contents'),
  );

export {
  actionListDomain,
  makeSelectListContents,
  makeSelectList,
};
