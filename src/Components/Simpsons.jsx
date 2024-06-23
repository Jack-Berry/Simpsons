import React from "react";
import Simpson from "./Simpson";

function Simpsons({ data, favourited }) {
  return data.map((data) => {
    let idKey = data.id;
    return (
      <Simpson key={idKey} id={idKey} data={data} favourited={favourited} />
    );
  });
}

export default Simpsons;
