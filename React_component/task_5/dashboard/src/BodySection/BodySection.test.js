import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection Component', () => {
  it('renders children and h2 element', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // check if the h2 element is rendered with the correct title
    expect(wrapper.find('h2').text()).toBe('test title');

    // check if the children nodes are rendered
    expect(wrapper.contains(<p>test children node</p>)).toBeTruthy();
  });
});
