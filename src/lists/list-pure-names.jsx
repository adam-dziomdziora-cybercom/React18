import React from 'react';
import { generateRandomIntegerInRange } from './hello-lists';
import { Button, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import maleNames from '../data/names-male.json';
import femaleNames from '../data/names-female.json';
import './list-pure.scss';

class ListPureNames extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      myNames: [{ sex: 'man', name: 'Adam' }],
      maleNamesList: [],
      femaleNamesList: [],
    };
  }
  componentDidMount() {
    this.setState({
      maleNamesList: maleNames.data,
      femaleNamesList: femaleNames.data,
    });
  }

  doStuff = () => {
    const {
      myNames: myNamesFromState,
      maleNamesList,
      femaleNamesList,
    } = this.state;
    const randomIndex = generateRandomIntegerInRange(
      0,
      maleNamesList.length - 1
    );
    const isMale = generateRandomIntegerInRange(0, 1) === 0;
    const randomName = isMale
      ? maleNamesList[randomIndex]
      : femaleNamesList[randomIndex];
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

export default ListPureNames;
