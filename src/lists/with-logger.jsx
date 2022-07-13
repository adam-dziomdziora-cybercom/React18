import React from 'react';
import PropTypes from 'prop-types';

function withLogger(WrappedComponent) {
  class HOC extends React.PureComponent {
    componentDidMount() {
      const { updatedLog } = this.props;
      console.log(`hej, jestem HOC! ${updatedLog}`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  HOC.propTypes = {
    updatedLog: PropTypes.string,
  };

  HOC.defaultProps = {
    updatedLog: '',
  };

  return HOC;
}

export default withLogger;
