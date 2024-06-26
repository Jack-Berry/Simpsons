import React, { useRef, useEffect } from "react";

function Search({ onInput }) {
  const inputRef = useRef(null);
  const localInput = (e) => {
    onInput(e.target.value, e.target.id);
    console.log(e.target.value, e.target.id);
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // Only runs once

  return (
    <div className="searchContainer">
      <input
        type="text"
        id="search"
        className="searchBox"
        placeholder="Search here..."
        ref={inputRef}
        onInput={localInput}
      />
      <select className="select" id="select" onChange={localInput}>
        <option disabled selected value>
          Sort
        </option>
        <option value={"A-Z"}>A-Z</option>
        <option value={"Z-A"}>Z-A</option>
      </select>
    </div>
  );
}

export default Search;
