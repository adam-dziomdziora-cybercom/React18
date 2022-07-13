import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';

export const HelloBootstrap = (props) => {
  const { btnFn1, btnFn2, btnTxt1, btnTxt2 } = props;
  return (
    <Row className="mx-0">
      <Button as={Col} variant="primary" className="mx-2" onClick={btnFn1}>
        {btnTxt1}
      </Button>
      <Button as={Col} variant="secondary" className="mx-2" onClick={btnFn2}>
        {btnTxt2}
      </Button>
    </Row>
  );
};
HelloBootstrap.propTypes = {
  btnTxt1: PropTypes.string,
  btnTxt2: PropTypes.string,
  btnFn1: PropTypes.func,
  btnFn2: PropTypes.func,
};
