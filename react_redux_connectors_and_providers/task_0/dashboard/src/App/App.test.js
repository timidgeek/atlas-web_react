import React from 'react';
import { shallow, mount } from 'enzyme';
import { App, mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('App Component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it("contains the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications').exists()).toBe(true);
  });

  it("contains the Header component", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });

  it("contains the Login component", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.containsMatchingElement(<Login />)).toEqual(true);
  });

  it("contains the Footer component", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });

  it('does not display CourseList when isLoggedIn is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });
});

describe('when isLoggedIn is true', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<App isLoggedIn={true} />);
  });

  it('does not include Login component', () => {
    const LoginComponent = wrapper.find('form');
    expect(LoginComponent.exists()).toBe(false);
  });

  it('includes CourseList component when user logged in', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ user: { isLoggedIn: true } });
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });

});

// react_state tests
describe ('state of App Component', () =>  {
  it('should have displayDrawer default set to false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('updates state to true when handleDisplayDrawer is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('updates state to false when handleHideDrawer is called', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  // react_state task 2 tests
  it('updates user state correctly when logIn is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password');
    expect(wrapper.state('user').isLoggedIn).toBe(true);
    expect(wrapper.state('user').email).toBe('test@example.com');
  });

  it('updates user state correctly when logOut is called', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password');
    expect(wrapper.state('user').isLoggedIn).toBe(true);

    wrapper.instance().logOut();
    expect(wrapper.state('user').isLoggedIn).toBe(false);
  });

  // react_state task 3 test
  it('markNotificationAsRead works as expected', () => {
    const wrapper = shallow(<App />);
    const notificationLength = wrapper.state('listNotifications').length;
    wrapper.instance().markNotificationAsRead(1);

    expect(wrapper.state('listNotifications').length).toBe(notificationLength - 1);
    expect(wrapper.state('listNotifications').some(n => n.id === 1)).toBe(false);
  });
});

describe('mapStateToProps', () => {
  test('should map state to props correctly', () => {
    // Define a mock Redux state
    const state = {
      ui: {
        isLoggedIn: true // Assuming this is how your state is structured
      }
    };

    // Call mapStateToProps with the mock state
    const props = mapStateToProps(state);

    // Check if the props contain the expected values
    expect(props.isLoggedIn).toBe(true);
  });
});
