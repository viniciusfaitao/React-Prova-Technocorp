import React, { createContext, useContext, useEffect, useState } from "react";
import { UseLotationLines } from "../../Services/LotationLinesApi";
import { SearchContext } from "../SearchLines";

export const LotationLinesContext = createContext();

export const LotationLinesProvider = (props) => {
  const { search } = useContext(SearchContext);

  const [lotationLines, setLotationLines] = useState([]);

  const fetchData = async () => {
    const result = await UseLotationLines(search);
    setLotationLines(result);
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <LotationLinesContext.Provider value={{ lotationLines }}>
      {props.children}
    </LotationLinesContext.Provider>
  );
};
