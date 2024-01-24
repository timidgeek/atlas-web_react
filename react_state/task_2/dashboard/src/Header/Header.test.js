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

});
