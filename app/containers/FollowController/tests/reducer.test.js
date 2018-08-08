import { fromJS } from 'immutable';
import followControllerReducer from '../reducer';

describe('followControllerReducer', () => {
  it('returns the initial state', () => {
    expect(followControllerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
