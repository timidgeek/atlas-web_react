import { Map } from 'immutable';
import * as actionTypes from '../actions/uiActionTypes';

// basic reducer
export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({}) // nested map for user object
});

export default function uiReducer(state = initialState, action) {
  // reducer logic, button handler
  // updating syntax on return statement to work immutably with Map()
  switch (action.type) {
    case actionTypes.DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);

    case actionTypes.HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);

    case actionTypes.LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);

    case actionTypes.LOGIN_FAILURE:
      return state.set('isUserLoggedIn', false);

    case actionTypes.LOGOUT:
      return state.set('isUserLoggedIn', false);

    default:
      return state;
  }
}
