import React from 'react';
import PropTypes from 'prop-types';
import { generateRandomIntegerInRange } from './hello-lists';

import './list-pure.scss';
import { Button, ListGroup } from 'react-bootstrap';

class ListPure extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { myItems: [1, 1, 2, 3, 5, 8] };
    // this.doStuff = this.doStuff.bind(this); // replaced with labda syntax
    this.doNothing = this.doNothing.bind(this);
  }

  // here we need to bind this to the method
  doNothing() {
    const { myItems } = this.state;
    console.log(`I am doing nothing! ${myItems}`);
  }

  //here we use the lambda syntax, so we don't need to bind this
  doStuff = () => {
    const { myItems } = this.state;
    const randomValue = generateRandomIntegerInRange(150, 510);
    const lastItemIncreased = myItems[myItems.length - 1] + randomValue;
    const newMyItems = [...myItems, lastItemIncreased];
    this.setState({ myItems: newMyItems });
  };

  renderMyItems = () => {
    const { myItems } = this.state;
    return myItems.map(
      (singleValue, index) => `idx: ${index} value: ${singleValue};`
    );
  };

  render() {
    const { id, valueIWantToSee } = this.props;
    console.log(`I am redenering here list ${id}! ${valueIWantToSee}`);
    return (
      <div id={id} className="listPure">
        <ListGroup>
          My list with Id: {id} has state
          <p className="text-shadow"> {this.renderMyItems()}</p>
          {valueIWantToSee && valueIWantToSee.length > 0 && (
            <p>
              OK there is your hidden content:
              <span className="text-secret">{valueIWantToSee}</span>
            </p>
          )}
        </ListGroup>

        <Button onClick={this.doStuff}>click and do stuff</Button>
        <Button variant="secondary" onClick={this.doNothing}>
          nothing!
        </Button>
      </div>
    );
  }
}

ListPure.propTypes = {
  id: PropTypes.string.isRequired,
  valueIWantToSee: PropTypes.string,
};

ListPure.defaultProps = {
  valueIWantToSee: '',
};

export default ListPure;
