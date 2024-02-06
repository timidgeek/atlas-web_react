import notificationReducer, { initialState } from '../reducers/notificationReducer';
import * as actionTypes from '../actions/notificationActionTypes';
import { Map, List } from 'immutable';

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

    const expectedState = initialState.set('notifications', Map({
      '1': Map({ id: 1, message: 'Notification 1', isRead: false }),
      '2': Map({ id: 2, message: 'Notification 2', isRead: false }),
    }));
  
    expect(newState.toJS()).toEqual(expectedState.toJS());
  });

  it('should handle MARK_AS_READ', () => {
    const currentState = initialState.set(
      'notifications',
      Map([
        { id: 1, message: 'Notification 1', isRead: false },
        { id: 2, message: 'Notification 2', isRead: false },
      ])
    );

    const action = { type: actionTypes.MARK_AS_READ, index: 1 };
    const newState = notificationReducer(currentState, action);

    expect(newState).toEqual(
      currentState.setIn(['notifications', 1, 'isRead'], true)
    );
  });

  it('should handle SET_TYPE_FILTER', () => {
    const currentState = initialState;

    const action = { type: actionTypes.SET_TYPE_FILTER, filter: 'HIGH_PRIORITY' };
    const newState = notificationReducer(currentState, action);

    expect(newState).toEqual(
      currentState.set('filter', 'HIGH_PRIORITY')
    );
  });
});
