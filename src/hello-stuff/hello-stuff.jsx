import React from 'react';
import HelloWorld from '../hello-world';
import { HelloName } from './hello-name';
import { HelloBootstrap } from './hello-bootstrap';

const HelloStuff = () => {
  return (
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
      <HelloBootstrap
        btnFn1={() => alert('Button 1 clicked')}
        btnFn2={() => alert("You clicked 2'nd button")}
        btnTxt1="my Super Btn 1"
        btnTxt2="and btn 2 here"
      />
    </React.Fragment>
  );
};

export default HelloStuff;
