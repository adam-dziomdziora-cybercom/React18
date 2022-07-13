import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyRouter } from './router/router';

import { Provider } from 'react-redux';
import './style/main.scss';
import { store } from './redux/store';

const htmlElement = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(htmlElement);
reactRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyRouter />
    </Provider>
  </React.StrictMode>
);
