import { fromJS } from 'immutable';
import reviewCardBottomBarReducer from '../reducer';

describe('reviewCardBottomBarReducer', () => {
  it('returns the initial state', () => {
    expect(reviewCardBottomBarReducer(undefined, {})).toEqual(fromJS({}));
  });
});
