import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('BodySectionWithMarginBottom Component', () => {
  it('renders BodySection component with correct props', () => {
    const title = 'Test Title';
    const children = <p>Test Children</p>;

    const wrapper = shallow(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );

    // check if BodySection component is rendered
    expect(wrapper.find(BodySection)).toHaveLength(1);

    // check if props are passed correctly to BodySection
    const bodySectionProps = wrapper.find(BodySection).props();
    expect(bodySectionProps.title).toBe(title);
    expect(bodySectionProps.children).toEqual(children);
  });
});
