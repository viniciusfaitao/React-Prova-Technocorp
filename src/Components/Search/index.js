import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../Contexts/SearchLines";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

export const SearchComponent = () => {
  const { search, handleSearch } = useContext(SearchContext);

  return (
    <>
      <form className="form">
        <input
          className="form_input"
          type="text"
          placeholder="Digite uma linha para pesquisar"
          onChange={(event) => handleSearch(event)}
        />

        {!search ? (
          <button type="submit" className="form_button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        ) : (
          <button
            className="form_button"
            onClick={(event) => {
              handleSearch("");
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
      </form>
    </>
  );
};
