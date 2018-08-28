import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the replyList state domain
 */

const selectReplyListDomain = state => state.get('replyList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ReplyList
 */

const makeSelectReplyList = () =>
  createSelector(selectReplyListDomain, substate => substate.toJS());

export default makeSelectReplyList;
export { selectReplyListDomain };
