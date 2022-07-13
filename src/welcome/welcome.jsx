import React, { lazy } from 'react';

const HelloStuff = lazy(() => import('../hello-stuff/hello-stuff'));
const MyLists = lazy(() => import('../lists/my-lists'));

class Welcome extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <HelloStuff />
        <MyLists />
      </React.Fragment>
    );
  }
}

export default Welcome;
