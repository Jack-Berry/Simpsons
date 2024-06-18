import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Simpsons from "./Components/Simpsons";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getSimpsons();
  }

  getSimpsons = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    this.setState({ simpsons: data });
  };

  render() {
    console.log(this.state.simpsons);
    if (!this.state.simpsons) {
      return <p>Loading...</p>;
    }

    return <Simpsons simpsons={this.state.simpsons} />;
  }
}

export default App;
