// uiActionCreators test suite
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

describe('login action creator', () => {
  it('should return the correct action', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const expectedAction = {
      type: LOGIN,
      user: {
        email,
        password
      }
    };
    const result = login(email, password);
    expect(result).toEqual(expectedAction);
  });
});

describe('logout action creator', () => {
  it('should return the correct action', () => {
    const expectedAction = {
      type: LOGOUT
    };
    const result = logout();
    expect(result).toEqual(expectedAction);
  });
});

describe('displayNotificationDrawer action creator', () => {
  it('should return the correct action', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER
    };
    const result = displayNotificationDrawer();
    expect(result).toEqual(expectedAction);
  });
});

describe('hideNotificationDrawer action creator', () => {
  it('should return the correct action', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER
    };
    const result = hideNotificationDrawer();
    expect(result).toEqual(expectedAction);
  });
});
