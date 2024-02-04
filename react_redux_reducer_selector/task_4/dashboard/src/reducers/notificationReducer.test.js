import notificationReducer, { initialState } from '../reducers/notificationReducer';
import * as actionTypes from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const newState = notificationReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const mockData = [
      { id: 1, message: 'Notification 1' },
      { id: 2, message: 'Notification 2' },
    ];

    const action = { type: actionTypes.FETCH_NOTIFICATIONS_SUCCESS, data: mockData };
    const newState = notificationReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      notifications: mockData.map(notification => ({ ...notification, isRead: false })),
    });
  });

  it('should handle MARK_AS_READ', () => {
    const currentState = {
      notifications: [
        { id: 1, message: 'Notification 1', isRead: false },
        { id: 2, message: 'Notification 2', isRead: false },
      ],
      filter: 'DEFAULT',
    };

    const action = { type: actionTypes.MARK_AS_READ, index: 1 };
    const newState = notificationReducer(currentState, action);

    expect(newState).toEqual({
      ...currentState,
      notifications: [
        { id: 1, message: 'Notification 1', isRead: true },
        { id: 2, message: 'Notification 2', isRead: false },
      ],
    });
  });

  it('should handle SET_TYPE_FILTER', () => {
    const currentState = {
      notifications: [],
      filter: 'DEFAULT',
    };

    const action = { type: actionTypes.SET_TYPE_FILTER, filter: 'HIGH_PRIORITY' };
    const newState = notificationReducer(currentState, action);

    expect(newState).toEqual({
      ...currentState,
      filter: 'HIGH_PRIORITY',
    });
  });
});
