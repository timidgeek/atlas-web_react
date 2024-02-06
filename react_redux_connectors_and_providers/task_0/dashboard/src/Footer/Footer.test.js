import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('Footer Component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });

  it('does not display the link when the user is logged out within the context', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );

    expect(wrapper.find('.contact').exists()).toBe(false);
  });

  it('displays the link when the user is logged in within the context', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('.contact').exists()).toBe(true);
  });
});
