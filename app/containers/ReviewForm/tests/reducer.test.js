import { fromJS } from 'immutable';
import reviewFormReducer from '../reducer';

describe('reviewFormReducer', () => {
  it('returns the initial state', () => {
    expect(reviewFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
