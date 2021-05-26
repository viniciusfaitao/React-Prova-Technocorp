import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    if (event) {
      const result = event.target.value;
      setSearch(result);
    } else {
      setSearch(event);
    }
  };

  return (
    <SearchContext.Provider value={{ search, setSearch, handleSearch }}>
      {props.children}
    </SearchContext.Provider>
  );
};
