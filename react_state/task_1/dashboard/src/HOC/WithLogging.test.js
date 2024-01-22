import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login'
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

// restore console.log after all tests
afterAll(() => {
});

describe('WithLogging HOC', () => {
  // wrapped element is pure HTML
  it('should log mount and unmount messages for pure HTML', () => {
    const mockConsoleLog = jest.spyOn(console, 'log');
    const Component = () => <p />;
    const ComponentWithLogging = WithLogging(Component);

    const wrapper = mount(<ComponentWithLogging />);

    expect(mockConsoleLog).toHaveBeenCalledWith('Component Component is mounted');

    wrapper.unmount();
    expect(mockConsoleLog).toHaveBeenCalledWith('Component Component is going to unmount');

    mockConsoleLog.mockRestore();
  });

  // wrapped element is the Login component
  it('should log mount and unmount messages for Login component', () => {
    const mockConsoleLog = jest.spyOn(console, 'log');
    const ComponentWithLogging = WithLogging(Login);

    const wrapper = mount(<ComponentWithLogging />);
    expect(mockConsoleLog).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();
    expect(mockConsoleLog).toHaveBeenCalledWith('Component Login is going to unmount');

    mockConsoleLog.mockRestore();
  });
});
