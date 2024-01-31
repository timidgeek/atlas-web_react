import uiReducer, { initialState } from './uiReducer';
import * as actionTypes from '../actions/uiActionTypes';

describe('uiReducer tests', () => {
  it('returns the initial state when no action is passed', () => {
    const newState = uiReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('returns the initial state when the action SELECT_COURSE is passed', () => {
    const action = { type: actionTypes.SELECT_COURSE };
    const newState = uiReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  it('correctly changes isNotificationDrawerVisible when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const action = { type: actionTypes.DISPLAY_NOTIFICATION_DRAWER };
    const newState = uiReducer(initialState, action);

    expect(newState.isNotificationDrawerVisible).toBe(true);

    // expect other properties to remain unchanged
    expect(newState.isUserLoggedIn).toBe(false);
    expect(newState.user).toEqual({});
  });
});
