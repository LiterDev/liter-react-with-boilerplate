import { fromJS } from 'immutable';
import myPageReducer from '../reducer';

describe('myPageReducer', () => {
  it('returns the initial state', () => {
    expect(myPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
