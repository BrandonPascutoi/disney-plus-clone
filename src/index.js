import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const action = createAction('action')

const reducer = createReducer({count: 0}, {
  action: (state) => {
    return state
  }
})

const store = configureStore({
  reducer: {
    firstReducer: reducer
  }
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);