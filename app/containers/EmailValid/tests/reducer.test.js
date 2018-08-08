import { fromJS } from 'immutable';
import emailValidReducer from '../reducer';

describe('emailValidReducer', () => {
  it('returns the initial state', () => {
    expect(emailValidReducer(undefined, {})).toEqual(fromJS({}));
  });
});
