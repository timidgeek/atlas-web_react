import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('Header component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
    <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
     <Header />
    </AppContext.Provider>);
    expect(wrapper).toBeDefined();
  });

  it('renders img and h1 tags', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
       <Header />
      </AppContext.Provider>);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  // react_state task 2 tests

  it('mounts header with a default context value and does not create logoutSection', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(0);
});

it('mounts header with user isLoggedIn and shows the logoutSection', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'user@test.com' } }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(1);
});

it('calls the logOut function when the logout link is clicked', () => {
    const logOutSpy = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'user@test.com' }, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('span').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
});
});
