import React from 'react';
import { render, unmountComponentAtNode, createRoot } from 'react-dom';
import { act } from 'react-dom/test-utils';
import WithLogging from './WithLogging';

const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

// restore console.log after all tests
afterAll(() => {
  mockConsoleLog.mockRestore();
});

describe('WithLogging HOC', () => {
  // wrapped element is pure HTML
  it('should log mount and unmount messages for pure HTML', () => {
    const WrappedComponent = () => <p>Test HTML Component</p>;
    const ComponentWithLogging = WithLogging(WrappedComponent);

    let container = document.createElement('div');
    document.body.appendChild(container);

    act(() => {
      render(<ComponentWithLogging />, container);
    });

    expect(mockConsoleLog).toHaveBeenCalledWith('Component is mounted on componentDidMount()');

    act(() => {
      unmountComponentAtNode(container);
    });

    expect(mockConsoleLog).toHaveBeenCalledWith('Component is going to unmount on componentWillUnmount()');
  });

  // wrapped element is the Login component
  it('should log mount and unmount messages for Login component', () => {
    const Login = () => <div>Login component content</div>;
    const ComponentWithLogging = WithLogging(Login);

    let container = document.createElement('div');
    document.body.appendChild(container);

    act(() => {
      render(<ComponentWithLogging />, container);
    });

    expect(mockConsoleLog).toHaveBeenCalledWith('Component Login is mounted on componentDidMount()');

    act(() => {
      unmountComponentAtNode(container);
    });

    expect(mockConsoleLog).toHaveBeenCalledWith('Component Login is going to unmount on componentWillUnmount()');
  });
});
