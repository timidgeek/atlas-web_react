import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

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
    expect(wrapper.html()).toContain('<li data-priority=\"default\"><u>test</u></li>');
  });

  it('calls markAsRead with the correct ID when clicked', () => {
    const markAsReadSpy = jest.fn();
    const wrapper = shallow(<NotificationItem id={1} markAsRead={markAsReadSpy} />);
    wrapper.simulate('click');

    expect(markAsReadSpy).toHaveBeenCalledWith(1);
    });

});
