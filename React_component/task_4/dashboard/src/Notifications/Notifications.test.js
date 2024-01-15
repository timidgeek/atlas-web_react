import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';


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

  it('displays menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });
//
  it('does not display Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.NotificationsItem').length).toBe(0);
  });

  it('displays menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it('displays Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.Notifications').exists()).toBe(true);
  });

  it('renders the right number of NotificationItem when listNotifications is passed', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).length).toBe(listNotifications.length);
  });

  it('renders the text "Here is the list of notifications" only when listNotifications is not empty', () => {
    const listNotifications = [{ id: 1, type: 'default', value: 'New course available' }];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.contains('Here is the list of notifications')).toEqual(true);
  });

  it('displays "No new notification for now" instead of "Here is the list of notifications" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.containsMatchingElement(<NotificationItem value='No new notification for now' />)).toBe(false);
  });

  // task 2 tests

  it('calls console.log with the correct message when markAsRead is called', () => {
    // mock the console.log function
    const consoleSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Notifications />);

    // call markAsRead with a mock notification ID
    wrapper.instance().markAsRead(1);

    // check that console.log was called with the correct message
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

    // restore the original console.log function after the test
    consoleSpy.mockRestore();
  });

  // task 11 tests

  it('does not rerender when updating props with the same list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

    // record the initial render count
    const initialRenderCount = wrapper.instance().renderCount;

    // update props with the same list
    wrapper.setProps({ displayDrawer: true, listNotifications: listNotifications });

    // verify that the component did not rerender
    expect(wrapper.instance().renderCount).toEqual(initialRenderCount);
  });

  it('rerenders when updating props with a longer list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];
    const longerListNotifications = [
      ...listNotifications,
      { id: 4, type: 'default', value: 'Another course available' }
    ];

    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);

    // record the initial render count
    const initialRenderCount = wrapper.instance().renderCount;

    // update props with a longer list
    wrapper.setProps({ displayDrawer: true, listNotifications: longerListNotifications });

    // verify that the component rerendered
    expect(wrapper.instance().renderCount).toEqual(initialRenderCount + 1);
  });
});
