import React, { useContext } from "react";
import { BusLinesContext } from "../../Contexts/BusLines";
import { SearchComponent } from "../Search";
import { ItineraryContext } from "../../Contexts/ItineraryLines";
import "./style.scss";

export const BusComponent = () => {
  const { busLines } = useContext(BusLinesContext);
  const { setId } = useContext(ItineraryContext);

  return (
    <body className="background_bus">
      <header className="background_bus_header">
        <h1>Ônibus</h1>
      </header>
      <main className="background_bus_main">
        <div className="background_bus_main--posts">
          <div className="background_bus_main--posts--head">
            <div className="background_bus_main--posts--head--tables">
              <p>Código</p>
              <p>Linha</p>
            </div>
            <div>
              <SearchComponent />
            </div>
          </div>
          <div>
            {!busLines.includes("Linhas n�o encontradas") ? (
              busLines.map((item, index) => (
                <div
                  className="background_bus_main--posts--content"
                  key={index}
                >
                  <div className="background_bus_main--posts--content--code">
                    <p>{busLines[index].codigo}</p>
                    <p>{busLines[index].nome}</p>
                  </div>
                  <div className="background_bus_main--posts--content--itinerary">
                    <button onClick={() => setId(busLines[index].id)}>
                      Itinerario
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h1>Linhas não encontradas</h1>
            )}
          </div>
        </div>
      </main>
    </body>
  );
};
