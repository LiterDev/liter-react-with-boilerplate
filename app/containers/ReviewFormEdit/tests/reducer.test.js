import { fromJS } from 'immutable';
import reviewFormEditReducer from '../reducer';

describe('reviewFormEditReducer', () => {
  it('returns the initial state', () => {
    expect(reviewFormEditReducer(undefined, {})).toEqual(fromJS({}));
  });
});
