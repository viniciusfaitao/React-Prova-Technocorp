import React, { createContext, useContext, useEffect, useState } from "react";
import { UseBusLines } from "../../Services/BusLinesApi";
import { SearchContext } from "../SearchLines";

export const BusLinesContext = createContext();

export const BusLinesProvider = (props) => {
  const { search } = useContext(SearchContext);

  const [busLines, setBusLines] = useState([]);

  const fetchData = async () => {
    const result = await UseBusLines(search);
    setBusLines(result);
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <BusLinesContext.Provider value={{ busLines }}>
      {props.children}
    </BusLinesContext.Provider>
  );
};
