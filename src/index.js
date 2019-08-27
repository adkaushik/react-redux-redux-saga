import React from 'react';
import { render } from "react-dom";

import { Provider } from 'react-redux';

import createStore from '../store';
import App from './app.js';

export const store = createStore();

const Index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

render(
  <Index />,
  document.getElementById('root')
);

