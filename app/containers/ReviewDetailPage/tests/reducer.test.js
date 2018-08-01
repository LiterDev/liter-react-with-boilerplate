import { fromJS } from 'immutable';
import reviewDetailPageReducer from '../reducer';

describe('reviewDetailPageReducer', () => {
  it('returns the initial state', () => {
    expect(reviewDetailPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
