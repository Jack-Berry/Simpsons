import React, { useEffect, useState } from "react";
import axios from "axios";
import Simpsons from "./Components/Simpsons";
import Search from "./Components/Search";

const App = () => {
  const [data, getData] = useState();
  const [inputText, setInputText] = useState("");
  const totalFavourites = 0;

  const getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    data.forEach((e, index) => {
      e.id = index + 1;
    });
    getData(data);
  };
  useEffect(() => {
    getApiData();
  }, []); // Only runs once

  const onInput = (text) => {
    setInputText({ inputText: text });
  };

  const favourited = (id) => {
    const dataCopy = [...data];
    console.log(Array.isArray(dataCopy), "FAV");
    const which = dataCopy.findIndex((item) => {
      return item.id === id;
    });
    dataCopy[which + 1].favourite = !dataCopy[which + 1].favourite;
    getData({ data: dataCopy });
  };

  if (!data) {
    return <p>Loading...</p>;
  }
  const filterResults = () => {
    let filtered = [...data];

    // if (inputText) {
    //   filtered = filtered.filter((item) => {
    //     return item.character
    //       .toLowerCase()
    //       .includes(inputText.toLocaleLowerCase());
    //   });
    // }
    // console.log(filtered, "filtered");

    // filtered = filtered.length ? filtered : data;
    console.log(Array.isArray(data), "source");
    return filtered;
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
