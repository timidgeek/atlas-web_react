![Redux](https://media.licdn.com/dms/image/D4D12AQEWQOLIMWK5tg/article-cover_image-shrink_720_1280/0/1693508176711?e=2147483647&v=beta&t=8zDEXngfj4G3GkYAYj4kTcL_cHT5EGgxd8UADkJb8-A)
# React Redux Connectors and Providers :sparkles:

The Provider makes the Redux store available to all components in your application.

<ins>Some key points on Redux providers:</ins>
- The `Provider` is a component provided by React Redux that makes the Redux store accessible to the entire React component tree.
- It takes a `store` prop, which is the Redux store you want to use in your application.
- You typically wrap your entire application with the `Provider` at the top level to ensure that any component can access the Redux store.

<ins>Provider example code:</ins>
```
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    {/* Your entire application components go here */}
  </Provider>
);
```

The connect function connects individual components to the Redux store, allowing them to access state and dispatch actions.

<ins>Key aspects of Redux connectors:</ins>
- The `connect` function is part of the React Redux library and is used to connect React components to the Redux store.
- It is a higher-order component that takes two functions as arguments: `mapStateToProps` and `mapDispatchToProps`.
- `mapStateToProps` is a function that receives the current state and returns an object of props that will be passed to the component.
- `mapDispatchToProps` is a function that receives the `dispatch` function and returns an object of action creators, allowing the component to dispatch actions.

<ins>Connector example code:</ins>
```
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

const Counter = ({ count, increment, decrement }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

## Learning Objectives:

- Redux connectors and how to use them
- The different functions you can pass to a connector (mapStateToProps, mapDispatchToPros)
- How to map an action creator to a component using a connector
- How to map an async action creator to a component with Redux Thunk
- What Redux Providers are and how to set up your app’s store
- How you can improve a connector’s performance using Reselect
- How to use Redux’s dev tools to debug the state of your application


## Requirements:

- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using `node 12.x.x` and `npm 6.x.x`
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- A `README.md file`, at the root of the folder of the project, is mandatory
- Push all of your files, including `package.json` and `.babelrc`
- All of your functions must be exported


## Contributors:

:star: **Lindsey Thomas** | [timidgeek.com]("timidgeek.com/")