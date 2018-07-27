import { fromJS } from 'immutable';
import slideTestReducer from '../reducer';

describe('slideTestReducer', () => {
  it('returns the initial state', () => {
    expect(slideTestReducer(undefined, {})).toEqual(fromJS({}));
  });
});
