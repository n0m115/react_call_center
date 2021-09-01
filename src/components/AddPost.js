import React, { Component, Fragment } from 'react';
import PostForm from './PostForm'; 

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <PostForm />
      </Fragment>
    );
  }
}

export default AddPost;