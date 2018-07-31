import { fromJS } from 'immutable';
import followCtrlReducer from '../reducer';

describe('followCtrlReducer', () => {
  it('returns the initial state', () => {
    expect(followCtrlReducer(undefined, {})).toEqual(fromJS({}));
  });
});
