import React from 'react';
import ListFibonacci from './list-fibonacci';
import { HelloLists } from './hello-lists';

import { HelloStuff } from './hello-stuff';
import ListPure from './list-pure';
import ListPureNames from './list-pure-names';
import { ListWithInput } from './list-with-input';
import { Col, ListGroupItem } from 'react-bootstrap';

const listItem = (
  <ListGroupItem
    action
    variant="secondary"
    as={Col}
    onClick={() => alert('Hi!')}
  >
    hi there!
  </ListGroupItem>
);
class Welcome extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <HelloStuff />
        <HelloLists />
        <ListWithInput
          id="myListWithInput1"
          listItem={listItem}
          valueIWantToSee="secret123"
        />
        <ListPure id="myListPure" />
        <ListPure id="myListPure2" valueIWantToSee="another secret" />
        <ListPureNames />
        <ListFibonacci updatedLog="A to jest przekazana wiadomość!" />
      </React.Fragment>
    );
  }
}

export default Welcome;
