import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";
import Simpsons from "./Components/Simpsons";
import Search from "./Components/Search";
import { useDispatch, useSelector } from "react-redux";
import { SET_DATA, SET_FAVS, FILTER_DATA, UPDATE_DATA } from "./redux/types";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const totalFavourites = useSelector((state) => state.favs);

  const getApiData = async () => {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    data.forEach((e, index) => {
      e.id = index + 1;
      e.favourite = false;
    });
    dispatch({ type: SET_DATA, data });
  };
  useEffect(() => {
    getApiData();
  }, []); // Only runs once
  if (!data) {
    return <p>Loading...</p>;
  }

  const favourited = (id, type) => {
    const dataCopy = [...data];

    const which = dataCopy.findIndex((item) => {
      return item.id === id;
    });
    if (type === "fav") {
      dataCopy[which].favourite = !dataCopy[which].favourite;
      // getData(dataCopy);
      dispatch({ type: UPDATE_DATA, dataCopy });
      updateFavs();
    }
    if (type === "delete") {
      dataCopy.splice(which, 1);
      dispatch({ type: UPDATE_DATA, dataCopy });
      console.log(dataCopy);
    }
  };

  const filterResults = (text, id) => {
    let filtered = [...data];
    if (id === "search") {
      filtered = filtered.filter((item) => {
        return item.character.toLowerCase().includes(text.toLocaleLowerCase());
      });
      if (!text) {
        getApiData();
      }
    }

    filtered = filtered.length ? filtered : data;

    if (id === "select") {
      filtered.sort((a, b) => {
        if (a.character > b.character) {
          return 1;
        }
        if (a.character < b.character) {
          return -1;
        }
        return 0;
      });
    }
    if (text === "Z-A") {
      filtered.reverse();
    }

    dispatch({ type: FILTER_DATA, filtered });
  };

  const updateFavs = () => {
    const dataCopy = [...data];

    const newFavourites = dataCopy.filter((item) => {
      return item.favourite === true;
    });
    dispatch({ type: SET_FAVS, newFavourites });
  };

  return (
    <>
      <h1>Total Favourited: {totalFavourites.length}</h1>
      <Search onInput={filterResults} />
      <Simpsons favourited={favourited} />
    </>
  );
};

export default App;
