import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorld } from './hello-world.jsx';
import { HelloName } from './hello-name.jsx';

const htmlElement = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(htmlElement);
reactRoot.render(
  <React.Fragment>
    <HelloWorld />
    <HelloWorld myClassName="blue-header" />
    <HelloWorld myClassName="yellow-transparent-header" />
    <HelloName name="adam" myClassName="blue-header" />
  </React.Fragment>
);
