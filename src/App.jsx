import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Simpsons from "./Components/Simpsons";
import Search from "./Components/Search";

const App = () => {
  const [data, getData] = useState();
  const [inputText, setInputText] = useState("");
  const [totalFavourites, getFavs] = useState([]);

  const getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    data.forEach((e, index) => {
      e.id = index + 1;
      e.favourite = false;
    });
    getData(data);
  };
  useEffect(() => {
    getApiData();
  }, []); // Only runs once
  if (!data) {
    return <p>Loading...</p>;
  }

  const onInput = (text) => {
    setInputText(text);
    console.log(inputText);
  };

  const favourited = (id) => {
    const dataCopy = [...data];

    const which = dataCopy.findIndex((item) => {
      return item.id === id;
    });
    console.log(which, "FAV");
    dataCopy[which].favourite = !dataCopy[which].favourite;
    console.log(dataCopy[which], "FAV");
    getData(dataCopy);
    updateFavs();
  };

  const filterResults = () => {
    let filtered = [...data];
    if (inputText) {
      filtered = filtered.filter((item) => {
        return item.character
          .toLowerCase()
          .includes(inputText.toLocaleLowerCase());
      });
    }

    filtered = filtered.length ? filtered : data;
    console.log(filtered);
    return filtered;
  };

  const updateFavs = () => {
    const dataCopy = [...data];

    const newFavourites = dataCopy.filter((item) => {
      return item.favourite === true;
    });
    getFavs(newFavourites);
    console.log(newFavourites);
  };

  return (
    <>
      <h1>Total Favourited: {totalFavourites.length}</h1>
      <Search onInput={onInput} />
      <Simpsons data={filterResults()} favourited={favourited} />
    </>
  );
};

export default App;
