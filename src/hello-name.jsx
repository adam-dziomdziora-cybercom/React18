import React from 'react';
import PropTypes from 'prop-types';

export const HelloName = (props) => {
  return <h1 className={props.myClassName}>Hello, {props.name}!</h1>;
};

HelloName.propTypes = {
  name: PropTypes.string.isRequired,
  myClassName: PropTypes.string.isRequired,
};
