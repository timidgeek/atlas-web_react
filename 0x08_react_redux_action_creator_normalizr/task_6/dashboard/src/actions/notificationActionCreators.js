import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { bindActionCreators } from 'redux';
import store from './yourReduxStore';

// notification action creators
export const markAsAread = (index) => {
  return {
    type: MARK_AS_READ,
    payload: {
      index
    }
  };
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    payload: {
      filter
    }
  };
};


// export bound action creators
export const boundMarkAsRead = bindActionCreators(markAsAread, store.dispatch);
export const boundSetNotificationFilter = bindActionCreators(setNotificationFilter, store.dispatch);