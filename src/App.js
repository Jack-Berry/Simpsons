import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Simpsons from "./Components/Simpsons";
import Search from "./Components/Search";

class App extends Component {
  state = { inputText: "" };

  componentDidMount() {
    this.getSimpsons();
  }

  getSimpsons = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    data.forEach((e, index) => {
      e.id = index + 1;
    });
    this.setState({ simpsons: data });
  };

  favourited = (id) => {
    // this.setState({ totalFavourites: this.state.totalFavourites + 1 });
    const simpsonsCopy = [...this.state.simpsons];

    const which = simpsonsCopy.findIndex((item) => {
      return item.id === id;
    });
    simpsonsCopy[which + 1].favourite = !simpsonsCopy[which + 1].favourite;
    this.setState({ simpsons: simpsonsCopy });
  };

  onInput = (text) => {
    this.setState(text);
  };

  render() {
    const { simpsons } = this.state;

    if (!simpsons) {
      return <p>Loading...</p>;
    }
    // const simps = { ...this.state.simpsons };
    // const filteredSimps = Object.values(simps).filter((item) => {
    //   if (item.character === this.state.inputText) {
    //     return true;
    //   }
    // });
    // console.log(filteredSimps, this.state.inputText, simps);

    const totalFavourites = this.state.simpsons.filter((item) => {
      return item.favourite === true;
    });
    return (
      <>
        <h1>Total Favourited: {totalFavourites.length}</h1>
        <Search onInput={this.onInput} />
        <Simpsons simpsons={simpsons} favourited={this.favourited} />
      </>
    );
  }
}

export default App;
