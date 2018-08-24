import { fromJS } from 'immutable';
import commentsReducer from '../reducer';

describe('commentsReducer', () => {
  it('returns the initial state', () => {
    expect(commentsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
