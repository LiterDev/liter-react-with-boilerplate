import { fromJS } from 'immutable';
import reviewDetailResolverReducer from '../reducer';

describe('reviewDetailResolverReducer', () => {
  it('returns the initial state', () => {
    expect(reviewDetailResolverReducer(undefined, {})).toEqual(fromJS({}));
  });
});
