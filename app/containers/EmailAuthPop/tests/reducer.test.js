import { fromJS } from 'immutable';
import emailAuthPopReducer from '../reducer';

describe('emailAuthPopReducer', () => {
  it('returns the initial state', () => {
    expect(emailAuthPopReducer(undefined, {})).toEqual(fromJS({}));
  });
});
