import React from 'react';
import { Col, ListGroupItem } from 'react-bootstrap';
import { HelloLists } from './hello-lists';
import ListFibonacci from './list-fibonacci';
import ListPure from './list-pure';
import ListPureNames from './list-pure-names';
import { ListWithInput } from './list-with-input';

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

const MyLists = () => {
  return (
    <React.Fragment>
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
};

export default MyLists;
