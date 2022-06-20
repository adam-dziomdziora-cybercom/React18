import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloLists } from './hello-lists.jsx';

import { HelloStuff } from './hello-stuff.jsx';

import './style/main.scss';

const htmlElement = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(htmlElement);
reactRoot.render(
  <>
    <HelloStuff />
    <HelloLists />
  </>
);
