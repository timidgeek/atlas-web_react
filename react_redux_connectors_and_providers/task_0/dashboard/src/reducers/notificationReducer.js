import * as actionTypes from '../actions/notificationActionTypes';
import { Map, List } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = Map({
  notifications: Map(),
  filter: 'DEFAULT'
});

export default function notificationReducer(state =  initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_NOTIFICATIONS_SUCCESS:
      return state.merge(notificationsNormalizer(action.data));

    case actionTypes.MARK_AS_READ:
        return state.setIn(['notifications', action.index, 'isRead'], true);

    case actionTypes.SET_TYPE_FILTER:
        return state.set('filter', action.filter);

    default:
      return state;
    }
}