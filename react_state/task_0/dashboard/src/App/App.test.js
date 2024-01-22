import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
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
    expect(wrapper.containsMatchingElement(<Notifications />)).toEqual(true);
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

  it('includes CourseList component', () => {
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });

  it('calls logOut function and displays alert when ctrl+h is pressed', () => {
    const mockLogOut = jest.fn();
    // spy on global alert function
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    // render component w/ mockLogOut as prop
    const wrapper = mount(<App logOut={mockLogOut} />);
    // simulate ctrl+h press
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    window.dispatchEvent(event);

    expect(mockLogOut).toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith('Logging you out');
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
});