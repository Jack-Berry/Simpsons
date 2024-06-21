import React, { Component } from "react";

class Search extends Component {
  inputRef = React.createRef();

  localInput = (e) => {
    this.props.onInput(e.target.value);
  };
  componentDidMount() {
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
      </>
    );
  }
}

export default Search;
