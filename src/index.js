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
    {React.createElement(
      'span',
      {
        className: 'header',
        style: {
          fontSize: 'xx-large',
          fontStyle: 'oblique',
          color: 'yellow',
          fontVariant: 'small-caps',
        },
      },
      'Hi there I love CSS!'
    )}
    {React.createElement(
      HelloName,
      { myClassName: 'yellow-transparent-header', name: 'John' },
      null
    )}
    {React.createElement(
      'div',
      { id: 'mySuperDiv' },
      <HelloName myClassName="yellow-transparent-header" name="Margareth" />
    )}
    {React.createElement(
      'div',
      { style: { border: '1rem dashed violet' } },
      React.createElement(
        'span',
        {
          className: 'blue-header',
          style: {
            fontSize: 'xx-large',
            fontStyle: 'oblique',
            color: 'red',
            fontVariant: 'small-caps',
          },
        },
        'Span in Div 1'
      )
    )}
  </React.Fragment>
);
