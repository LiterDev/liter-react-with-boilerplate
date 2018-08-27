import { fromJS } from 'immutable';
import commentsDrawerReducer from '../reducer';

describe('commentsDrawerReducer', () => {
  it('returns the initial state', () => {
    expect(commentsDrawerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
