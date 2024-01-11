import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });

  it('renders the correct NotificationItem', () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const firstItem = wrapper.find('NotificationItem').first();
    expect(firstItem.html()).toEqual('<li data-priority=\"default\">New course available</li>');
  });
});
