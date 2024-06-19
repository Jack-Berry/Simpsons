import React, { Component } from "react";

class Search extends Component {
  state = { inputText: "" };
  inputRef = React.createRef();

  localInput = (e) => {
    this.setState({ inputText: e.target.value });
    this.props.onInput(this.state);
  };

  // The inputRef causes an error and I have no idea why as it is a working ref by the time the button is pressed
  buttonClick() {
    // const searchValue = this.inputRef.current.value;
    console.log(this.inputRef);
    // this.props.onInput({ inputText: searchValue });
  }
  componentDidMount() {
    console.log(this.inputRef, "YOOOHHOOOOO");
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }
  render() {
    return (
      <>
        <input
          type="text"
          className="searchBox"
          placeholder="Search here..."
          ref={this.inputRef}
          onInput={this.localInput}
        />
        <button className="searchButton" onClick={this.buttonClick}>
          Go!
        </button>
      </>
    );
  }
}

export default Search;
