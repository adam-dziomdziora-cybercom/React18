import React from 'react';
import { generateRandomIntegerInRange } from './hello-lists';
import { Button, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import maleNames from '../data/names-male.json';
import { connect } from 'react-redux';
import femaleNames from '../data/names-female.json';
import './list-pure.scss';
import { TYPES } from '../redux/actions/names.actions';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import { List } from 'immutable';

const mapStateToProps = (state) => {
  return {
    names: state.names,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSetNamesFemale: (namesFemale) => {
      dispatch({ type: TYPES.SET_NAMES_FEMALE, namesFemale });
    },
    handleSetNamesMale: (namesMale) => {
      dispatch({ type: TYPES.SET_NAMES_MALE, namesMale });
    },
  };
};

class ListPureNames extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      myNames: [{ sex: 'man', name: 'Adam' }],
    };
  }
  componentDidMount() {
    console.log('sprawdzam czy są imiona');
    if (this.props.names.get('namesMale').size === 0) {
      console.log('ustawiam listę męską');
      this.props.handleSetNamesMale(maleNames.data);
    }
    if (this.props.names.get('namesFemale').size === 0) {
      this.props.handleSetNamesFemale(femaleNames.data);
    }
  }

  doStuff = () => {
    const { myNames: myNamesFromState } = this.state;
    const { names } = this.props;
    const maleNamesList = names.get('namesMale', List());
    const femaleNamesList = names.get('namesFemale', List());
    const randomIndex = generateRandomIntegerInRange(0, maleNamesList.size - 1);
    const isMale = generateRandomIntegerInRange(0, 1) === 0;
    const randomName = isMale
      ? maleNamesList.get(randomIndex)
      : femaleNamesList.get(randomIndex);
    const newNameInList = { sex: isMale ? 'man' : 'woman', name: randomName };
    const myNames = [...myNamesFromState, newNameInList];
    this.setState({ myNames });
  };

  renderNames = () => {
    const { myNames } = this.state;
    const jsx = myNames.map((nameObj, idx) => (
      <ListGroupItem key={idx}>
        <Row className="centered-row">
          <Col className={nameObj.sex === 'man' ? 'text-man' : 'text-woman'}>
            {nameObj.sex}
          </Col>
          <Col className="text-name">{nameObj.name}</Col>
        </Row>
      </ListGroupItem>
    ));
    return <ListGroup>{jsx}</ListGroup>;
  };

  render() {
    return (
      <React.Fragment>
        {this.renderNames()}
        <Button onClick={this.doStuff}>add person</Button>
      </React.Fragment>
    );
  }
}

ListPureNames.propTypes = {
  names: ImmutablePropTypes.map.isRequired,
  handleSetNamesFemale: PropTypes.func.isRequired,
  handleSetNamesMale: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPureNames);
