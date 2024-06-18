import React, { Component } from "react";
import Simpson from "./Simpson";

class Simpsons extends Component {
  render() {
    return this.props.simpsons.map((item, index) => {
      return <Simpson key={index} item={item} />;
    });
  }
}

export default Simpsons;
