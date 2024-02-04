import * as actionTypes from '../actions/courseActionTypes';
import { Map, List, fromJS } from 'immutable';
import { coursesNormalizer } from '../schema/courses'

export const initialState = Map({
  courses: List()
});

export default function courseReducer(state =  initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_COURSE_SUCCESS:
      // normalize data and merge it with state
      const normalizedData = coursesNormalizer(action.data);
      const updatedCourses = fromJS(normalizedData.entities).get('courses', List()).map(course =>
        course.set('isSelected', false)
      );
      return state.set('courses', updatedCourses);
  
    // for select and unselect, use the setIn function from Immutable
    // to update the value of the item
    case actionTypes.SELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], true);
    case actionTypes.UNSELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], false);

  default:
    return state;
  }
}