import * as actionTypes from '../actions/uiActionTypes';

// basic reducer
export const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};

export default function uiReducer(state = initialState, action) {
  // reducer logic, button handler
  switch (action.type) {
    case actionTypes.DISPLAY_NOTIFICATION_DRAWER:
    return {
      ...state,
      isNotificationDrawerVisible: true
    };

    case actionTypes.HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false
      };

    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true
      };

    case actionTypes.LOGIN_FAILURE:
    case actionTypes.LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false
      };

    default:
      return state;
  }
}
