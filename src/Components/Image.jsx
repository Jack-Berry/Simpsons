import React, { Component } from "react";

class Image extends Component {
  state = {};
  render() {
    return (
      <>
        <img src={this.props.image}></img>
      </>
    );
  }
}

export default Image;
