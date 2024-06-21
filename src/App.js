import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Simpsons from "./Components/Simpsons";
import Search from "./Components/Search";

class App extends Component {
  state = { inputText: "" };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    data.forEach((e, index) => {
      e.id = index + 1;
    });
    this.setState({ simpsons: data });
  };

  favourited = (id) => {
    const dataCopy = [...this.state.simpsons];

    const which = dataCopy.findIndex((item) => {
      return item.id === id;
    });
    dataCopy[which + 1].favourite = !dataCopy[which + 1].favourite;
    this.setState({ simpsons: dataCopy });
  };

  onInput = (text) => {
    this.setState({ inputText: text });
  };
  filterResults() {
    let filtered = [...this.state.simpsons];
    if (this.state.inputText) {
      filtered = filtered.filter((item) => {
        return item.character
          .toLowerCase()
          .includes(this.state.inputText.toLocaleLowerCase());
      });
    }
    console.log(filtered);

    filtered = filtered.length ? filtered : this.state.simpsons;

    return filtered;
  }

  render() {
    const { simpsons } = this.state;

    if (!simpsons) {
      return <p>Loading...</p>;
    }

    const totalFavourites = this.state.simpsons.filter((item) => {
      return item.favourite === true;
    });
    return (
      <>
        <h1>Total Favourited: {totalFavourites.length}</h1>
        <Search onInput={this.onInput} />
        <Simpsons
          simpsons={this.filterResults()}
          favourited={this.favourited}
        />
      </>
    );
  }
}

export default App;
