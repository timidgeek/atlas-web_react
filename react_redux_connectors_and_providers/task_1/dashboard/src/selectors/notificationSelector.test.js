import { Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import notificationReducer from '../reducers/notificationReducer';
import * as actionTypes from '../actions/notificationActionTypes';

describe('notificationSelectors', () => {
  const initialState = Map({
    notifications: Map({
      notifications: Map({
        '1': Map({ id: 1, message: 'Notification 1', isRead: false }),
        '2': Map({ id: 2, message: 'Notification 2', isRead: true }),
        '3': Map({ id: 3, message: 'Notification 3', isRead: false }),
      }),
      filter: 'DEFAULT',
    }),
  });

  it('should return filter type selected', () => {
    const state = notificationReducer(initialState, { type: actionTypes.SET_TYPE_FILTER, filter: 'HIGH_PRIORITY' });
    const selectedFilter = filterTypeSelected(state);
    expect(selectedFilter).toEqual('HIGH_PRIORITY');
  });

  it('should return a list of notifications', () => {
    const state = notificationReducer(initialState, { type: actionTypes.FETCH_NOTIFICATIONS_SUCCESS, data: [] });
    const notifications = getNotifications(state);
    const expectedNotifications = Map({
      '1': Map({ id: 1, message: 'Notification 1', isRead: false }),
      '2': Map({ id: 2, message: 'Notification 2', isRead: true }),
      '3': Map({ id: 3, message: 'Notification 3', isRead: false }),
    });
    expect(notifications).toEqual(expectedNotifications);
  });

  it('should return a list of unread notifications', () => {
    const state = notificationReducer(initialState, { type: actionTypes.FETCH_NOTIFICATIONS_SUCCESS, data: [] });
    const unreadNotifications = getUnreadNotifications(state);
    const expectedUnreadNotifications = Map({
      '1': Map({ id: 1, message: 'Notification 1', isRead: false }),
      '3': Map({ id: 3, message: 'Notification 3', isRead: false }),
    });
    expect(unreadNotifications).toEqual(expectedUnreadNotifications);
  });
});
