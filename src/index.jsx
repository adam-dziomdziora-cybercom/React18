import React from 'react';
import ReactDOM from 'react-dom/client';
import ListFibonacci from './list-fibonacci';
import { HelloLists } from './hello-lists';

import { HelloStuff } from './hello-stuff';
import ListPure from './list-pure';
import ListPureNames from './list-pure-names';
import { ListWithInput } from './list-with-input';

import './style/main.scss';

const htmlElement = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(htmlElement);
const listItem = (
  <li
    className="list-group-item list-group-item-primary list-group-item-action"
    onClick={() => {
      alert('Hi!');
    }}
  >
    hi there!
  </li>
);
reactRoot.render(
  <React.StrictMode>
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
  </React.StrictMode>
);
