import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { bindActionCreators } from 'redux';
import store from './yourReduxStore';

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

// export bound action creators
export const boundLogin = bindActionCreators(login, store.dispatch);
export const boundLogout = bindActionCreators(logout, store.dispatch);
export const boundDisplayNotificationDrawer = bindActionCreators(displayNotificationDrawer, store.dispatch);
export const boundHideNotificationDrawer = bindActionCreators(hideNotificationDrawer, store.dispatch);

