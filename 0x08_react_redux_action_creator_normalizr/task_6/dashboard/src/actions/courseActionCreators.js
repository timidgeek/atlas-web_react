import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';
import store from './yourReduxStore';

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
export const boundSelectCourse = bindActionCreators(selectCourse, store.dispatch);
export const boundUnselectCourse = bindActionCreators(unselectCourse, store.dispatch);