import { fromJS } from 'immutable';
import signInReducer from '../reducer';

describe('signInReducer', () => {
  it('returns the initial state', () => {
    expect(signInReducer(undefined, {})).toEqual(fromJS({}));
  });
});
