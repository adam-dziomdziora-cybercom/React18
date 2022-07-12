import React from 'react';
import ReactDOM from 'react-dom/client';
import { MyRouter } from './router';

import './style/main.scss';

const htmlElement = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(htmlElement);
reactRoot.render(
  <React.StrictMode>
    <MyRouter />
  </React.StrictMode>
);
