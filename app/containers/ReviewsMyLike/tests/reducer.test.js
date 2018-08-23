import { fromJS } from 'immutable';
import reviewsMyLikeReducer from '../reducer';

describe('reviewsMyLikeReducer', () => {
  it('returns the initial state', () => {
    expect(reviewsMyLikeReducer(undefined, {})).toEqual(fromJS({}));
  });
});
