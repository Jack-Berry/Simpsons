import React from "react";
import Character from "./Character";
import Content from "./Content";

function Simpson({ data, favourited, id }) {
  const { character, characterDirection, image, quote, favourite } = data;
  const onClick = (e) => {
    favourited(id);
  };

  return (
    <div className={`mainCard ${favourite ? "fav" : ""}`} onClick={onClick}>
      <Character name={character} />
      <Content image={image} direction={characterDirection} quote={quote} />
    </div>
  );
}

export default Simpson;
