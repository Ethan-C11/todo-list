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
    <div className="flex pb-5 justify-center ">
      <form
        className="flex justify-center px-5 py-5 gap-1 bg-white/[.5] w-1/2 rounded-lg backdrop-blur-lg border border-gray-400"
        onSubmit={(e) => handleSearchLocal(e)}
      >
        <input
          type="text"
          placeholder="Recherche"
          value={value}
          onChange={(e) => handleChange(e)}
          className="border border-gray-300 rounded-md w-full h-7 justify-center px-2 ml-5"
        />
        <button className="bg-gray-300 px-1 mr-5 rounded-md border border-gray-400 hover:bg-gray-200">
          <img src="./src/assets/searchIcon.svg" alt="Recherche" />
        </button>
      </form>
    </div>
  );
}

export default Searchbar;
