import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { useDispatch } from 'react-redux';

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
export const boundMarkAsRead = (index) => useDispatch(markAsRead(index));
export const boundSetNotificationFilter = (filter) => useDispatch(setNotificationFilter(filter));