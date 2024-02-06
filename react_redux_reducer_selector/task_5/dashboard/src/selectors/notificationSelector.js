import { createSelector } from 'reselect';
import { Map } from 'immutable';

const selectNotifications = state => state.get('notifications');

// selector for filterTypeSelected
export const filterTypeSelected = createSelector(
  notifications => notifications.get('filter'),
  (filter) => filter
);

// selector for getNotifications
export const getNotifications = createSelector(
  [selectNotifications],
  notifications => notifications.get('notifications', Map())
);

// selector for getUnreadNotifications
export const getUnreadNotifications = createSelector(
  getNotifications,
  notifications =>
    notifications.filter(notification => !notification.get('isRead'))
);
