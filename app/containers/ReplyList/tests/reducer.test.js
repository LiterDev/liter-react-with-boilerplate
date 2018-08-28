import { fromJS } from 'immutable';
import replyListReducer from '../reducer';

describe('replyListReducer', () => {
  it('returns the initial state', () => {
    expect(replyListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
