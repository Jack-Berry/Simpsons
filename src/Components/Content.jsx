import React, { Component } from "react";
import Quote from "./Quote";
import Image from "./Image";

class Content extends Component {
  render() {
    const { direction, image, quote } = this.props;
    if (direction === "Right") {
      return (
        <div className="content">
          <Quote quote={quote} />
          <Image image={image} />
        </div>
      );
    }
    return (
      <div className="content">
        <Image image={image} />
        <Quote quote={quote} />
      </div>
    );
  }
}

export default Content;
