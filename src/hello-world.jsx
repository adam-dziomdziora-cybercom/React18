import React from 'react';
import PropTypes from 'prop-types';

export const HelloWorld = (props) => {
  return (
    <h1 className={props.myClassName ? props.myClassName : 'header'}>
      Hello World!
    </h1>
  );
};
HelloWorld.propTypes = {
  myClassName: PropTypes.string,
};

export default HelloWorld;
