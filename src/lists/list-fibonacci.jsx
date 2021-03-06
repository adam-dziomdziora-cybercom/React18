import { List } from 'immutable';
import React from 'react';
import { Button } from 'react-bootstrap';
import withLogger from './with-logger';

class ListFibonacci extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: `Last updateted at ${new Date().toLocaleTimeString()}`,
      items: List([1, 1]),
    };
  }

  updateItems = () => {
    const { items: itemsState } = this.state;
    const newValue =
      itemsState.get(itemsState.size - 1) + itemsState.get(itemsState.size - 2);
    const items = itemsState.push(newValue);
    const date = `Last updateted at ${new Date().toLocaleTimeString()}, inserted value ${newValue}`;
    this.setState({ date, items });
  };

  render() {
    const { date, items } = this.state;
    return (
      <React.Fragment>
        <p>{date}</p>
        <p> {items.map((item) => `${item}, `)}</p>
        <Button onClick={this.updateItems}>lets update!</Button>
      </React.Fragment>
    );
  }
}

export default withLogger(ListFibonacci);
