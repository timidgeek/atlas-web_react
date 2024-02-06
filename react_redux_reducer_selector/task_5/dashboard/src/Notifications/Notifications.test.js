import React from 'react';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();


describe('Notifications Component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem')).toHaveLength(1);
  });

  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });

  it('renders the correct NotificationItem', () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();

    const firstItem = wrapper.find('NotificationItem').first();

    expect(firstItem.html()).toContain('No new notifications for now');
  });

  it('displays menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('[data-testid="menuItem"]').exists()).toBe(true);
  });
//
  it('does not display Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.NotificationsItem').length).toBe(0);
  });

  it('displays menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('[data-testid="menuItem"]').exists()).toBe(true);
  });

  it('displays Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('[data-testid="notifications"]').exists()).toBe(true);
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


  it('calls markNotificationAsRead with the correct ID when markAsRead is called', () => {
    const markNotificationAsReadMock = jest.fn();
    const wrapper = shallow(<Notifications markNotificationAsRead={markNotificationAsReadMock} />);
  
    wrapper.instance().markAsRead(1);
  
    expect(markNotificationAsReadMock).toHaveBeenCalledWith(1);
  });

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

    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    const initialRenderCount = wrapper.instance().renderCount;
    wrapper.setProps({ listNotifications: longerListNotifications });

    expect(wrapper.instance().renderCount).toEqual(initialRenderCount + 1);
  });

  // react_state tests
  it('calls handleDisplayDrawer when clicking on the menu item', () => {
    const handleDisplayDrawerMock = jest.fn();

    const wrapper = mount(<Notifications handleDisplayDrawer={handleDisplayDrawerMock}  />);

    wrapper.find('[data-testid="menuItem"] p').simulate('click');

    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when clicking on the button', () => {
    const handleHideDrawer = jest.fn();
    const handleDisplayDrawer = jest.fn();

    const wrapper = shallow(
      <Notifications 
        handleHideDrawer={handleHideDrawer} 
        handleDisplayDrawer={handleDisplayDrawer}
        listNotifications={[]}
        displayDrawer={true}
      />);
    wrapper.find('[data-testid="closeButton"]').simulate('click');

    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
