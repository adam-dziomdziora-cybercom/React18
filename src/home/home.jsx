import { List } from 'immutable';
import React from 'react';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { generateRandomIntegerInRange } from '../lists/hello-lists';

import './home.scss';

const mapStateToProps = (state) => {
  return {
    names: state.names,
  };
};

const Home = (props) => {
  const { names } = props;
  const maleNamesList = names.get('namesMale', List());
  const randomIndex = generateRandomIntegerInRange(0, maleNamesList.size - 1);
  const firstMale = maleNamesList.get(randomIndex) || 'Adam';
  return (
    <div className="text-effect centered-div">
      <h1 className="neon" data-text={`I love ${firstMale}`}>
        I love {firstMale}
      </h1>
      <div className="gradient"></div>
      <div className="spotlight"></div>
    </div>
  );
};
Home.propTypes = {
  names: ImmutablePropTypes.map.isRequired,
};

export default connect(mapStateToProps)(Home);
