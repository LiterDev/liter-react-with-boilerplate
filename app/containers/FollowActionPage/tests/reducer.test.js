import { fromJS } from 'immutable';
import followActionPageReducer from '../reducer';

describe('followActionPageReducer', () => {
  it('returns the initial state', () => {
    expect(followActionPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
