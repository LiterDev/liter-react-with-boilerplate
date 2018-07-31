import { fromJS } from 'immutable';
import reviewsReducer from '../reducer';

describe('reviewsReducer', () => {
  it('returns the initial state', () => {
    expect(reviewsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
