// uiActionCreators test suite
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure, loginRequest } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

// mock axios to control its behavior in tests
jest.mock('axios');

// create a mock Redux store with middleware
const mockStore = configureMockStore([thunk]);


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

describe('loginRequest action creator', () => {
  it('dispatches LOGIN and LOGIN_SUCCESS on successful API response', async () => {
    const expectedActions = [
      { type: LOGIN, user : { email: '', password: '' } },
      { type: LOGIN_SUCCESS },
    ];

    // mock the successful API response
    axios.get.mockResolvedValue({ data: JSON.stringify({}) });

    const store = mockStore({});
    await store.dispatch(loginRequest('', ''));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches LOGIN and LOGIN_FAILURE on API failure', async () => {
    const expectedActions = [
      { type: LOGIN, user : { email: 'test@test.com', password: 'password' }  },
      { type: LOGIN_FAILURE },
    ];

    // mock the API failure
    axios.get.mockRejectedValue(new Error('API request failed'));

    const store = mockStore({});
    await store.dispatch(loginRequest('test@test.com', 'password'));

    expect(store.getActions()).toEqual(expectedActions);
  });
});