import React, { Component } from 'react';

export default class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Not Found</h1>
        <p>The Page you're looking for isn't found.</p>
      </div>
    );
  }
}