import { fromJS } from 'immutable';
import followingActionPageReducer from '../reducer';

describe('followingActionPageReducer', () => {
  it('returns the initial state', () => {
    expect(followingActionPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
