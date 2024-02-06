import courseReducer, { initialState } from '../reducers/courseReducer';
import * as actionTypes from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return the initial state', () => {
    const newState = courseReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const mockData = [
      {
        id: 1,
        name: "ES6",
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20
      },
      {
        id: 3,
        name: "React",
        credit: 40
      }
    ];

    const action = { type: actionTypes.FETCH_COURSE_SUCCESS, data: mockData };
    const newState = courseReducer(initialState, action);

    expect(newState).toEqual(mockData.map(course => ({ ...course, isSelected: false })));
  });

  it('should handle SELECT_COURSE', () => {
    const currentState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];

    const action = { type: actionTypes.SELECT_COURSE, index: 2 };
    const newState = courseReducer(currentState, action);

    expect(newState).toEqual([
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ]);
  });

  it('should handle UNSELECT_COURSE', () => {
    const currentState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];

    const action = { type: actionTypes.UNSELECT_COURSE, index: 2 };
    const newState = courseReducer(currentState, action);

    expect(newState).toEqual([
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ]);
  });
});
