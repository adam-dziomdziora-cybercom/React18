import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TYPES } from '../redux/actions/counter.actions';
import { Button, ButtonGroup } from 'react-bootstrap';

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrementClick: () => {
      console.log('jestem w handle increment od dispatcha :O :O :O !');
      dispatch({ type: TYPES.INCREMENT });
    },
    handleDecrementClick: () => dispatch({ type: TYPES.DECREMENT }),
  };
};

export const HelloWorld = (props) => {
  const { counter } = props;
  return (
    <React.Fragment>
      <h1 className={props.myClassName ? props.myClassName : 'header'}>
        Hello World!
      </h1>
      <h2>The single counter value: {counter}</h2>
      <ButtonGroup>
        <Button onClick={props.handleIncrementClick} className="m-2">
          +
        </Button>
        <Button onClick={props.handleDecrementClick} className="m-2">
          -
        </Button>
      </ButtonGroup>
    </React.Fragment>
  );
};
HelloWorld.propTypes = {
  myClassName: PropTypes.string,
  counter: PropTypes.number.isRequired,
  handleDecrementClick: PropTypes.func.isRequired,
  handleIncrementClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
