import React, { useContext } from "react";
import { ItineraryContext } from "../../Contexts/ItineraryLines";
import { LotationLinesContext } from "../../Contexts/LotationLines";
import { SearchComponent } from "../Search";
import "./style.scss";

export const LotationComponent = () => {
  const { lotationLines } = useContext(LotationLinesContext);
  const { setId } = useContext(ItineraryContext);

  return (
    <body className="background_lotation">
      <header className="background_lotation_header">
        <h1>Lotação</h1>
      </header>
      <main className="background_lotation_main">
        <div className="background_lotation_main--posts">
          <div className="background_lotation_main--posts--head">
            <div className="background_lotation_main--posts--head--tables">
              <p>Código</p>
              <p>Linha</p>
            </div>
            <div>
              <SearchComponent />
            </div>
          </div>
          <div>
            {!lotationLines.includes("Linhas n�o encontradas") ? (
              lotationLines.map((item, index) => (
                <div
                  className="background_lotation_main--posts--content"
                  key={index}
                >
                  <div className="background_lotation_main--posts--content--code">
                    <p>{lotationLines[index].codigo}</p>
                    <p>{lotationLines[index].nome}</p>
                  </div>
                  <div className="background_lotation_main--posts--content--itinerary">
                    <button onClick={() => setId(lotationLines[index].id)}>
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
