import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders the correct HTML with dummy type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').prop('data-priority')).toEqual("default");
  });

  it('renders the correct HTML with dummy html prop', () => {
    const htmlProp = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={htmlProp} />);
    expect(wrapper.html()).toContain('<li data-priority=\"default\">[object Object]</li>');
  });

  // task 2 tests
  it('calls markAsRead with the correct ID when clicked', () => {
    const markAsReadSpy = jest.fn();
    // shallow render the NotificationItem component with the spy as a prop
    const wrapper = shallow(<NotificationItem id={1} markAsRead={markAsReadSpy} />);
    // simulate a click on the component
    wrapper.find('li').simulate('click');

    // check that markAsRead was called with the correct ID argument
    expect(markAsReadSpy).toHaveBeenCalledWith(1);
    });

});
