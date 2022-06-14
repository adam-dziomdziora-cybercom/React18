import React from 'react';
import PropTypes from 'prop-types';

import './style/main.scss';

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
