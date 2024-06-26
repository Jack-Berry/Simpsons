import React from "react";
import Simpson from "./Simpson";
import { useSelector } from "react-redux";

function Simpsons(favourited) {
  const data = useSelector((state) => state.data);
  return data.map((data) => {
    let idKey = data.id;
    return (
      <>
        <Simpson key={idKey} id={idKey} data={data} favourited={favourited} />
      </>
    );
    // return (
    //   <Simpson key={idKey} id={idKey} data={data} favourited={favourited} />
    // );
  });
}

export default Simpsons;
