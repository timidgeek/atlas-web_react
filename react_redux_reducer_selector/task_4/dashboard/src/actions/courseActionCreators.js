import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { useDispatch } from 'react-redux';

// course action creators
export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    payload: {
      index
    }
  };
};

export const unselectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    payload: {
      index
    }
  };
};

// export bound action creators
export const boundSelectCourse = (index) => useDispatch(selectCourse(index));
export const boundUnselectCourse = (index) => useDispatch(unselectCourse(index));