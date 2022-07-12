import React from 'react';
import { Button } from 'react-bootstrap';
import maleNames from './data/names-male.json';
import femaleNames from './data/names-female.json';
import './style/list-pure.scss';

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
    // write code here
  };

  renderNames = () => {
    // write code here
  };

  render() {
    return (
      <div>
        {this.renderNames()}
        <Button onClick={this.doStuff}>add person</Button>
      </div>
    );
  }
}

export default ListPureNames;
