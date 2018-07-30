import { fromJS } from 'immutable';
import actionListContainerReducer from '../reducer';

describe('actionListContainerReducer', () => {
  it('returns the initial state', () => {
    expect(actionListContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
