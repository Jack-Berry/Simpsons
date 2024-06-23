import React, { useState } from "react";
import Character from "./Character";
import Content from "./Content";

function Simpson({ data, favourited, id }) {
  let [_favourite, getFavourite] = useState(false);
  const { character, characterDirection, image, quote } = data;
  const onClick = () => {
    getFavourite((_favourite = !_favourite));
    favourited(id);
  };

  return (
    <div className={`mainCard ${_favourite ? "fav" : ""}`} onClick={onClick}>
      <Character name={character} />
      <Content image={image} direction={characterDirection} quote={quote} />
    </div>
  );
}

export default Simpson;
