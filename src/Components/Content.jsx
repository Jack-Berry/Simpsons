import React from "react";
import Quote from "./Quote";
import Image from "./Image";

function Content(image, direction, quote) {
  if (image.direction === "Right") {
    return (
      <div className="content">
        <Quote quote={image.quote} />
        <Image image={image.image} />
      </div>
    );
  }
  return (
    <div className="content">
      <Image image={image.image} />
      <Quote quote={image.quote} />
    </div>
  );
}

export default Content;
