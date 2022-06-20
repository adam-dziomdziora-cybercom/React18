import React from 'react';

const generateRandomIntegerInRange = (min, max) => {
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
    <li
      key={index}
      className="list-group-item"
    >{`my value is: ${singleValue} but I have the ${index} index`}</li>
  ));

  const myList = (
    <ul id={myId} className="list-group">
      {listItems}
    </ul>
  );

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
      {myList}
    </React.Fragment>
  );
};
