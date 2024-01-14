import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders the correct HTML with dummy type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.html()).toEqual('<li data-priority="default">test</li>');
  });

  it('renders the correct HTML with dummy html prop', () => {
    const htmlProp = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={htmlProp} />);
    expect(wrapper.html()).toEqual('<li data-priority="default"><u>test</u></li>');
  });
});
