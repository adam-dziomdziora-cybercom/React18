import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export const generateRandomIntegerInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const HelloLists = () => {
  const myId = 'myId';
  const minValue = 150;
  const maxValue = 510;
  const listItems = [
    generateRandomIntegerInRange(minValue, maxValue),
    generateRandomIntegerInRange(minValue, maxValue),
    generateRandomIntegerInRange(minValue, maxValue),
  ].map((singleValue, index) => (
    <ListGroupItem
      key={index}
    >{`my value is: ${singleValue} but I have the ${index} index`}</ListGroupItem>
  ));

  const myList = <ListGroup id={myId}>{listItems}</ListGroup>;

  return (
    <React.Fragment>
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
          { id: 'item1', className: 'list-group-item blue-header' },
          'item 1 \u26CF;'
        ),
        <ListGroupItem id="item2" className="header">
          item 2 hi &#x25ee;
        </ListGroupItem>,
        React.createElement(
          'li',
          {
            id: 'item3',
            className: 'list-group-item yellow-transparent-header',
          },
          'item 3 \u26CD;'
        )
      )}
      {myList}
    </React.Fragment>
  );
};
