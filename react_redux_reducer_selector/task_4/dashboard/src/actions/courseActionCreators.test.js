// test suite for course action
import { selectCourse, unselectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// test for selectCourse action creator
describe('selectCourse action creator', () => {
  it('should return the correct action', () => {
    const index = 1;
    const expectedAction = {
      type: SELECT_COURSE,
      payload: {
        index
      }
    };
    const result = selectCourse(index);
    expect(result).toEqual(expectedAction);
  });
});

// test for unselectCourse action creator
describe('unselectCourse action creator', () => {
  it('should return the correct action', () => {
    const index = 1;
    const expectedAction = {
      type: UNSELECT_COURSE,
      payload: {
        index
      }
    };
    const result = unselectCourse(index);
    expect(result).toEqual(expectedAction);
  });
});
