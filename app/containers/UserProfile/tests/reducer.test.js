import { fromJS } from 'immutable';
import userProfileReducer from '../reducer';

describe('userProfileReducer', () => {
  it('returns the initial state', () => {
    expect(userProfileReducer(undefined, {})).toEqual(fromJS({}));
  });
});
