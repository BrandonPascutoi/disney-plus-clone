import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';

const initialState = { state: 0 }
const reducer = createReducer(initialState, (builder) => {
  builder
    .addDefaultCase((state, action) => {
      return state
    })
})

const store = configureStore({ reducer: reducer })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);