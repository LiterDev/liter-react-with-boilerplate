import { fromJS } from 'immutable';
import shareContainerReducer from '../reducer';

describe('shareContainerReducer', () => {
  it('returns the initial state', () => {
    expect(shareContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
