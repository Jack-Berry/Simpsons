import React, { Component } from "react";
import Character from "./Character";
import Content from "./Content";

class Simpson extends Component {
  state = { favourite: false };
  onClick = () => {
    this.setState({ favourite: !this.state.favourite });
    this.props.favourited(this.props.id);
  };
  render() {
    const { character, characterDirection, image, quote, favourite } =
      this.props.item;

    return (
      <div
        className={`mainCard ${favourite ? "fav" : ""}`}
        onClick={this.onClick}
      >
        <Character name={character} />
        <Content image={image} direction={characterDirection} quote={quote} />
      </div>
    );
  }
}

export default Simpson;
