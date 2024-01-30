// notificationActionCreators test suite
import { markAsAread, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('markAsAread action creator', () => {
  it('should return the correct action', () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      payload: {
        index
      }
    };
    const result = markAsAread(index);
    expect(result).toEqual(expectedAction);
  });
});

describe('setNotificationFilter action creator', () => {
  it('should return the correct action with DEFAULT filter', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
      type: SET_TYPE_FILTER,
      payload: {
        filter
      }
    };
    const result = setNotificationFilter(filter);
    expect(result).toEqual(expectedAction);
  });

  it('should return the correct action with URGENT filter', () => {
    const filter = NotificationTypeFilters.URGENT;
    const expectedAction = {
      type: SET_TYPE_FILTER,
      payload: {
        filter
      }
    };
    const result = setNotificationFilter(filter);
    expect(result).toEqual(expectedAction);
  });
});
