import * as actionTypes from '../actions/notificationActionTypes';


export const initialState = {
  notifications: [],
  filter: 'DEFAULT'
};

export default function notificationReducer(state =  initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_NOTIFICATIONS_SUCCESS:
      return {
          ...state,
          notifications: action.data.map(notification => ({
              ...notification,
              isRead: false
          }))
      };
  case actionTypes.MARK_AS_READ:
      return {
          ...state,
          notifications: state.notifications.map(notification =>
              notification.id === action.index ? { ...notification, isRead: true } : notification
          )
      };
  case actionTypes.SET_TYPE_FILTER:
      return {
          ...state,
          filter: action.filter
      };
  default:
    return state;
  }
}