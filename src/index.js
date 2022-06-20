import React from 'react';
import ReactDOM from 'react-dom/client';

import { HelloStuff } from './hello-stuff.jsx';

import './style/main.scss';

const htmlElement = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(htmlElement);
reactRoot.render(
  <>
    <HelloStuff />
    {React.createElement(
      'h3',
      { id: 'mojeh2', className: 'header' },
      'Playing with react is cool'
    )}
    {React.createElement(
      'ul',
      { id: 'fajnalistaReactowa' },

      React.createElement(
        'li',
        { id: 'item1', className: 'blue-header' },
        'item 1 \u26CF;'
      ),
      <li id="item2" className="header">
        item 2 hi &#x25ee;
      </li>,
      React.createElement(
        'li',
        { id: 'item3', className: 'yellow-transparent-header' },
        'item 3 \u26CD;'
      )
    )}
  </>
);
