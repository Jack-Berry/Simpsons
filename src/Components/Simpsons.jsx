import React, { Component } from "react";
import Simpson from "./Simpson";

class Simpsons extends Component {
  render() {
    return this.props.simpsons.map((item, id) => {
      return (
        <Simpson
          key={id}
          id={id}
          item={item}
          favourited={this.props.favourited}
        />
      );
    });
  }
}

export default Simpsons;
