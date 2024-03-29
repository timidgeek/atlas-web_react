import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { Provider } from 'react-redux';
import {  configureStore } from '@reduxjs/toolkit';
import uiReducer from './reducers/uiReducer';

// create store
const store = configureStore({
  reducer: {
    ui: uiReducer
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export default store;