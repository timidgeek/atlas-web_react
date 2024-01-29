import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import { useDispatch } from 'react-redux';
import axios from 'axios';

// action creators
export const login = (email, password) => {
  return {
    type: LOGIN,
    user : { 
      email, password 
    }
  };
};
export const logout = () => {
  return {
    type: LOGOUT
  };
};
export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  };
};
export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  };
};
export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  };
};
export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE
  };
};
export const loginRequest = (email, password) => async (dispatch) => {
  try {
    dispatch(login(email, password));
    // fetch api
    const response = await axios.get('/login-success.json');
    // if api request successful
    dispatch(loginSuccess(response.data));
  } catch (error) { // if api request failure
    dispatch(loginFailure(error.message));
  }
};

// export bound action creators
export const boundLogin = () => useDispatch(login());
export const boundLogout = () => useDispatch(logout());
export const boundDisplayNotificationDrawer = () => useDispatch(displayNotificationDrawer());
export const boundHideNotificationDrawer = () => useDispatch(hideNotificationDrawer());
