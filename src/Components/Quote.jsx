import React, { Component } from "react";

class Quote extends Component {
  state = {};
  render() {
    return (
      <>
        <h2>{this.props.quote}</h2>
      </>
    );
  }
}

export default Quote;
