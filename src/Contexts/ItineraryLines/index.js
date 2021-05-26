import React, { createContext, useContext, useEffect, useState } from "react";
import { UseItinerary } from "../../Services/ItineraryApi";

export const ItineraryContext = createContext();

export const ItineraryProvider = (props) => {
  const [itinerary, setItinerary] = useState([]);

  const [id, setId] = useState(0);

  const fetchData = async () => {
    const result = await UseItinerary(id);
    setItinerary(result);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <ItineraryContext.Provider value={{ itinerary, id, setId }}>
      {props.children}
    </ItineraryContext.Provider>
  );
};
