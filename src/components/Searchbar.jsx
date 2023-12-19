import React from "react";
import { useState } from "react";

function Searchbar(Props) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearchLocal = (e) => {
    e.preventDefault();
    Props.handleSearch(value); // appel de la fonction du parent
  };

  return (
    <form
      className="flex justify-center pb-5 gap-1"
      onSubmit={(e) => handleSearchLocal(e)}
    >
      <input
        type="text"
        placeholder="Recherche"
        value={value}
        onChange={(e) => handleChange(e)}
        className="border border-gray-300 rounded-md w-1/2 h-7 justify-center"
      />
      <button className="bg-gray-300 px-1 rounded-md border border-gray-400 hover:bg-gray-200">
        <img src="./src/assets/searchIcon.svg" alt="Recherche" />
      </button>
    </form>
  );
}

export default Searchbar;
