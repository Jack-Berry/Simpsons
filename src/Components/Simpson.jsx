import React, { Component } from "react";
import Character from "./Character";
import Content from "./Content";

class Simpson extends Component {
  state = { favourite: false };
  onClick = () => {
    console.log("CLICK");
    this.setState({ favourite: !this.state.favourite });
  };
  render() {
    const { character, characterDirection, image, quote } = this.props.item;

    return (
      <div
        className={`mainCard ${this.state.favourite ? "fav" : ""}`}
        onClick={this.onClick}
      >
        <Character name={character} />
        <Content image={image} direction={characterDirection} quote={quote} />
      </div>
    );
  }
}

export default Simpson;
