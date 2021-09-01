import React, { Component, Fragment } from 'react';
import Posts from './Posts';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Posts />
      </Fragment>
    );
  }
}

export default Home;