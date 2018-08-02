import { fromJS } from 'immutable';
import reviewCardSliderReducer from '../reducer';

describe('reviewCardSliderReducer', () => {
  it('returns the initial state', () => {
    expect(reviewCardSliderReducer(undefined, {})).toEqual(fromJS({}));
  });
});
