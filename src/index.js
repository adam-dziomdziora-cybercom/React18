import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorld } from './hello-world.jsx';

const htmlElement = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(htmlElement);
reactRoot.render(
  <React.Fragment>
    <HelloWorld />
    <HelloWorld myClassName="blue-header" />
    <HelloWorld myClassName="yellow-transparent-header" />
  </React.Fragment>
);
