
import { fromJS } from 'immutable';
import activityMapsPageReducer from '../reducer';

describe('activityMapsPageReducer', () => {
  it('returns the initial state', () => {
    expect(activityMapsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});