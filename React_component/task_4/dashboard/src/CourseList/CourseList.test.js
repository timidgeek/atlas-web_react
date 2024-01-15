import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('CourseList Component', () => {
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  it('does not render "No course available yet" when listCourses is not empty', () => {
    const courses = [{ id: 1, name: 'React', credit: 40 }];
    const wrapper = shallow(<CourseList listCourses={courses} />);

    expect(wrapper.text()).not.toContain('No course available yet');
  });
});